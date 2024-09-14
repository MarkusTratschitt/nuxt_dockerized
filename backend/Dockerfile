# backend/Dockerfile

# Base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy project files
COPY . .

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Expose the port on which the API will run
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]
