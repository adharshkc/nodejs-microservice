FROM node:alpine

WORKDIR /app
COPY . .
COPY package.json .
RUN npm install
RUN npm run build
CMD [ "npm","run", "start:prod" ]
EXPOSE 3001