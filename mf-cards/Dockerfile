FROM node:16.17.0-alpine

WORKDIR /app

COPY . .

RUN npm i -g http-server
RUN npm install
RUN npm run build

EXPOSE 3003

CMD ["http-server","dist","-p","3003"]