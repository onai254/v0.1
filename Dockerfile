FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --production --silent && mv node_modules ../
COPY . ./
EXPOSE 1010
RUN npm install
CMD node index.js