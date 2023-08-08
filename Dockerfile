FROM node:18

WORKDIR /toxin-app

COPY package.json yarn.lock ./
COPY app /toxin-app/app

RUN yarn

COPY . .

RUN yarn build

ENV PORT 3000

EXPOSE $PORT

CMD ["yarn", "start"]