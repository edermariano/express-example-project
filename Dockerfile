FROM node:10-alpine

WORKDIR /devlab

COPY package.json yarn.lock ./
COPY . .
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
