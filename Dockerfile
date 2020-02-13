FROM node:alpine
WORKDIR '/app'

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["node", "server/index.js"]