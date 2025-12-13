import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const { filename } = params;

  // Security: only allow specific files
  const allowedFiles = ['herosection.mp4', 'about_us.gif', 'team_com.gif'];
  if (!allowedFiles.includes(filename)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'public', filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = request.headers.get('range');

  // Determine content type
  const contentType = filename.endsWith('.mp4')
    ? 'video/mp4'
    : 'image/gif';

  // Common headers for aggressive caching
  const commonHeaders = {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
    // Add ETag for better caching
    'ETag': `"${stat.mtime.getTime()}-${fileSize}"`,
    // Add Last-Modified
    'Last-Modified': stat.mtime.toUTCString(),
  };

  // Check if client has cached version
  const ifNoneMatch = request.headers.get('if-none-match');
  const ifModifiedSince = request.headers.get('if-modified-since');

  if (ifNoneMatch === commonHeaders['ETag'] ||
      (ifModifiedSince && new Date(ifModifiedSince) >= stat.mtime)) {
    return new NextResponse(null, {
      status: 304, // Not Modified
      headers: commonHeaders,
    });
  }

  // If range request (for video streaming)
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;

    const file = fs.createReadStream(filePath, { start, end });

    const headers = {
      ...commonHeaders,
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Content-Length': chunksize,
    };

    return new NextResponse(file, {
      status: 206,
      headers,
    });
  }

  // No range request - send entire file with proper caching
  const file = fs.createReadStream(filePath);

  return new NextResponse(file, {
    headers: {
      ...commonHeaders,
      'Content-Length': fileSize,
    },
  });
}
