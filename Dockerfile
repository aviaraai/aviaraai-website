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

ENV NODE_ENV=production \
    PORT=3000

# Copy only what's needed for runtime
COPY package.json ./
COPY package-lock.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# Bring built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
