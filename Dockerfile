FROM node:16.9.1

RUN npm install -g npm@7.24.0

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
