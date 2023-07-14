FROM node:18-alpine
WORKDIR /api
# Copy package.json and package-lock.json to the container
COPY package*.json ./
RUN npm install
RUN npm install bcrypt mongoose cors express body-parser nodemon
COPY . .
CMD ["nodemon", "index.js"]