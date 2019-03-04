FROM node:11

WORKDIR /app

RUN npm install -g yarn

COPY . .

RUN yarn install

CMD yarn build-ts && yarn serve