# Use official Node.js image
FROM node:18

WORKDIR /

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project for production
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Set environment variable for host
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]