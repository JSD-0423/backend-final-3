# syntax=docker/dockerfile:1

FROM node:18.17.0-alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install
COPY . .
RUN apk update && apk add bash
RUN yarn build:tsc

EXPOSE 5000
CMD [ "yarn","dev" ]