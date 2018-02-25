FROM node:9.6.1

# Create app dir
RUN mkdir /app

# Add dist and package.json to app
ADD dist /app
ADD package.json /app

# cd to app
WORKDIR /app

# Install dependencies
RUN npm i

# Run
CMD ["node", "index.js"]
