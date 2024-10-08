# Stage 1: Build the frontend application using Node.js
FROM node:18-alpine AS build

WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the frontend application (this will output the static files to the `dist` folder)
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the Node.js build stage to Nginx
COPY --from=build /app/.output/public /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the self-signed SSL certificate and key (falls verwendet)
COPY ./selfsigned.crt /etc/nginx/ssl/selfsigned.crt
COPY ./selfsigned.key /etc/nginx/ssl/selfsigned.key

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
