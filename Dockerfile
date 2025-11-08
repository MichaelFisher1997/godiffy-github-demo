# Use Node.js 18 LTS for stability
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the React app for production
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built React app to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Railway expects this)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]