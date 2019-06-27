FROM node:11-alpine AS builder
COPY . ./angular-example-app
WORKDIR /angular-example-app
RUN npm install
RUN npm run build:prod:en

FROM nginx:1-alpine
COPY --from=builder /angular-example-app/dist/browser/ /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
