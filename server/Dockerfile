FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]

#version: '3'
#services
#    app:
#        build:
#        command: yarn dev
#        ports:
#         - '3000:3001'
#        volumes:
#         - .:/usr/app