# Stage 1 — build
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit --progress=false

COPY . .
RUN npm run build

# Stage 2 — static webserver (NGINX)
FROM nginx:stable-alpine
LABEL org.opencontainers.image.source="https://github.com/<USERNAME>/<REPO_NAME>"

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built site
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config for SPA fallback (see ./nginx/default.conf below)
COPY ./deploy/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- --timeout=2 http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
