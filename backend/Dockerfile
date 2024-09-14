# Base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Copy the entrypoint script into the container
COPY entrypoint.sh ./entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x ./entrypoint.sh

# Expose the port on which the API will run
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/frontend/entrypoint.sh"]
