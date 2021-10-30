FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD export NODE_OPTIONS=--openssl-legacy-provider && npm run dev