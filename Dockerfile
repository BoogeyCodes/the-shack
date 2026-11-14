# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Served at the domain root on Railway, so build with base '/'
ENV VITE_BASE_PATH=/
RUN npm run build

# ---- Serve stage ----
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve@14.2.4
COPY --from=build /app/dist ./dist
# Railway provides $PORT; default to 8080 locally
ENV PORT=8080
EXPOSE 8080
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
