FROM node:carbon

WORKDIR /app

COPY dist/ ./
COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD [ "node", "main.js" ]
