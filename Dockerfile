# ---------- Build Stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config only
COPY nginx/default.conf /etc/nginx/conf.d/

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]