FROM node:14.15.0

WORKDIR /home/node/app
RUN npm install -g gatsby-cli

EXPOSE 8000 9000
