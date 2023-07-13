FROM node:18-alpine

WORKDIR /user/src/app

COPY . .

RUN npm install 

CMD ["npm", "run", "start:dev"]