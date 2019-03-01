# Use nodejs with yarn as base image
FROM kkarczmarczyk/node-yarn:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

# Give access on port 8080
EXPOSE 8080

# Serve application
CMD [ "yarn", "serve" ]