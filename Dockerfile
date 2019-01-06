FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/simple-benefits .

# Copy the EntryPoint
# COPY ./entryPoint.sh /
# RUN chmod +x /entryPoint.sh

# ENTRYPOINT ["/entryPoint.sh"]
# CMD ["nginx", "-g", "daemon off;"]
