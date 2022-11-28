FROM node:lts
WORKDIR /usr/src/client
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn run lint
RUN yarn prettier --write .
EXPOSE 3000
CMD [ "yarn", "dev" ]