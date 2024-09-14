# Stage 1: Build the frontend application using Node.js
FROM node:18-alpine AS build

# Set the working directory inside the container
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

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the Node.js build stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional but recommended)
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
