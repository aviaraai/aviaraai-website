# ============ BUILDER ============
FROM node:25.2.1-alpine3.23 AS builder

WORKDIR /app

# Copy dependency files
COPY package.json ./
COPY package-lock.json ./

# Install all deps (including dev) for build
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build Next.js (App Router)
RUN npm run build


# ============ RUNTIME ============
FROM node:25.2.1-alpine3.23 AS runtime

WORKDIR /app

# App will run on 8443 (no 3000)
ENV NODE_ENV=production \
    PORT=8443

# Copy only what's needed for runtime
COPY package.json ./
COPY package-lock.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# Bring built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install curl for HEALTHCHECK
RUN apk add --no-cache curl

# Expose the internal app port
EXPOSE 8443

# HEALTHCHECK — Verify homepage loads correctly on 8443
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -fsS http://localhost:8443/ || exit 1

CMD ["npm", "run", "start"]
