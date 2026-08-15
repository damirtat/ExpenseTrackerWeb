FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY --chown=101:101 docker/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 docker/40-write-runtime-config.sh /docker-entrypoint.d/40-write-runtime-config.sh
COPY --chown=101:101 docker/runtime-config.template.js /usr/share/nginx/html/runtime-config.template.js
COPY --from=build --chown=101:101 /app/dist /usr/share/nginx/html
RUN chmod 0555 /docker-entrypoint.d/40-write-runtime-config.sh

EXPOSE 8080
