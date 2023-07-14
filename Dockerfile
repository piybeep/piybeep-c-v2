FROM node:lts-alpine
WORKDIR /usr/src/client
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install -s
COPY . .
RUN yarn next telemetry disable
RUN yarn run lint
RUN yarn prettier --write .
EXPOSE 3000
CMD [ "yarn", "dev" ]
