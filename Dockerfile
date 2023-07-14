FROM node:lts-alpine
RUN npm install -g pnpm
WORKDIR /usr/src/client
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm install
COPY . .
RUN pnpm next telemetry disable
RUN pnpm lint
RUN pnpm prettier --write .
EXPOSE 3000
CMD [ "pnpm", "dev" ]
