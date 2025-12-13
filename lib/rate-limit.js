// Simple in-memory rate limiter for API routes
// For production with multiple servers, use Redis instead

const rateLimitMap = new Map();

export function rateLimit(options = {}) {
  const {
    interval = 60 * 1000, // 1 minute
    uniqueTokenPerInterval = 500, // Max 500 unique IPs per interval
  } = options;

  return {
    check: (limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = rateLimitMap.get(token) || [0];

        if (tokenCount[0] === 0) {
          // First request from this IP - set cleanup timer
          setTimeout(() => {
            rateLimitMap.delete(token);
          }, interval);
        }

        tokenCount[0] += 1;
        rateLimitMap.set(token, tokenCount);

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage > limit;

        // Prevent memory leak by limiting unique tokens
        if (rateLimitMap.size > uniqueTokenPerInterval) {
          // Clear oldest entries
          const entries = Array.from(rateLimitMap.entries());
          const toDelete = entries.slice(0, entries.length - uniqueTokenPerInterval);
          toDelete.forEach(([key]) => rateLimitMap.delete(key));
        }

        return isRateLimited
          ? reject(new Error('Rate limit exceeded'))
          : resolve({ success: true });
      }),
  };
}

// Get client IP from request
export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() :
             request.headers.get('x-real-ip') ||
             'unknown';
  return ip;
}
