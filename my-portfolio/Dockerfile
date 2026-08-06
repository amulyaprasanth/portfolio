FROM node:22-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .  

CMD ["npm", "run", "dev"]


