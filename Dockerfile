# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using NGINX
FROM nginx:alpine

# Copy the built React app to NGINX's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 81

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]

