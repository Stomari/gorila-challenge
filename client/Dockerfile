# Use an Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
RUN mkdir -p usr/app/client
WORKDIR /usr/app/client

# Copy the current directory contents into the container at /app
COPY ["package.json", "package-lock.json*", "./"]

# Install any needed packages specified in package.json
RUN npm install

# Copy the the rest of directory contents
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.py when the container launches
CMD ["npm", "start"]