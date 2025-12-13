# ============ BUILDER ============
FROM node:25.2.1-alpine3.23 AS builder

WORKDIR /app

# Copy dependency files
COPY package.json ./
COPY package-lock.json ./

# Install all deps (including dev) for build
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the source code
COPY . .

# Build Next.js (App Router) with optimizations
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


# ============ RUNTIME ============
FROM node:25.2.1-alpine3.23 AS runtime

WORKDIR /app

# Security: Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# App will run on 8443 (no 3000)
ENV NODE_ENV=production \
    PORT=8443 \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME="0.0.0.0"

# Copy only what's needed for runtime
COPY package.json ./
COPY package-lock.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev --prefer-offline --no-audit && \
    npm cache clean --force

# Bring built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set correct permissions for non-root user
RUN chown -R nextjs:nodejs /app

# Install curl for HEALTHCHECK
RUN apk add --no-cache curl dumb-init

# Switch to non-root user
USER nextjs

# Expose the internal app port
EXPOSE 8443

# HEALTHCHECK — Verify homepage loads correctly on 8443
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -fsS http://localhost:8443/ || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

CMD ["npm", "run", "start"]
