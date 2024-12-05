# Stage 1: Build the application
# 1. Select the Node.js base image (slim version for smaller size)
FROM node:18 AS build_stage

# 2. Set the working directory to /build
WORKDIR /build

# 3. Copy package.json and package-lock.json into the working directory
COPY package.json . 
COPY package.lock.json . 

# 4. Install dependencies
RUN npm install

# 5. Copy the source code into the working directory
COPY . .

# 6. Build the application (output will be in the `dist` folder)
RUN npm run build

# Stage 2: Host the application with Nginx
# 7. Select the Nginx base image (alpine version for smaller size)
FROM nginx:alpine

# 8. Copy the built assets from the build stage to the Nginx HTML folder
COPY --from=build_stage /build/dist /usr/share/nginx/html

# 9. Replace the default Nginx configuration with a custom configuration
ADD nginx/default.conf /etc/nginx/conf.d/default.conf

# 10. Expose port 80 for the application
EXPOSE 80

# 11. Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
