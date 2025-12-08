#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

# Detect docker compose command
if command -v docker &>/dev/null && docker compose version &>/dev/null; then
  DC="docker compose"
elif command -v docker-compose &>/dev/null; then
  DC="docker-compose"
else
  echo "Neither 'docker compose' nor 'docker-compose' found. Install Docker Compose first."
  exit 1
fi

NETWORK_NAME="aviara-net"
if ! docker network inspect "$NETWORK_NAME" >/dev/null 2>&1; then
  echo "Creating Docker network '$NETWORK_NAME'..."
  docker network create "$NETWORK_NAME"
fi

if [ ! -f ".env.local" ]; then
  echo "WARNING: .env.local file not found. Credentials may not load."
fi

echo "Stopping existing aviaraai-website stack…"
$DC down

echo "Building and starting aviaraai-website (production)…"
$DC up -d --build

echo
echo "Website running!"
echo "   → http://localhost:8443 (or your-server-ip:8443)"
