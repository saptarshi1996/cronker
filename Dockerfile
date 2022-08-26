FROM ubuntu:20.04 as builder
FROM node:15.14.0

RUN apt-get update -y && apt-get upgrade -y 
RUN apt-get install redis-server -y
RUN apt-get install mysql-server -y

VOLUME [ "/var/lib/cronker/db", "var/lib/cronker/crons" ]

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "bash", "entrypoint.bash" ]
