FROM node:13.7-alpine3.11

EXPOSE 8000

RUN npm install --quiet -g node-gyp gatsby-cli

WORKDIR /code
COPY ./package.json .
RUN npm install && npm cache clear --force
