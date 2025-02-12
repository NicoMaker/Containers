FROM node:20

WORKDIR /App

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node","server.js"]