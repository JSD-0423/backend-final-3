# syntax=docker/dockerfile:1

FROM node:16.18.1-alpine3.15

WORKDIR /usr/app
COPY . .
RUN yarn install
RUN yarn build:tsc
RUN sequelize db:create
RUN sequelize db:seed:all

CMD [ "yarn","start" ]
EXPOSE 5000