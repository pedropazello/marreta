FROM node:16.9.1

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp