FROM nginx:1-alpine
COPY browser/ /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

