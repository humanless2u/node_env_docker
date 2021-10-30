FROM node:alpine

WORKDIR /usr/app

RUN npm i nodemon -g

COPY package.json ./

RUN npm install express mongodb

COPY . .

EXPOSE 3000

CMD ["npm", "start"]