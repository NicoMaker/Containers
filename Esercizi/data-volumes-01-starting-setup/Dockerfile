FROM node:20

WORKDIR /App

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# denro il container questa è la cartella mappata in un volume 
VOLUME ["/App/feedback"]

CMD ["node","server.js"]