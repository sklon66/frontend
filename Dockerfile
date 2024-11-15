FROM node:20-alpine

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NAME dev

CMD ["npm", "start"]