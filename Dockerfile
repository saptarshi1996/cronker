FROM ubuntu:20.04 as builder
FROM node:15.14.0

RUN apt-get update -y && apt-get upgrade -y 
RUN apt-get install redis-server -y
RUN apt-get install mysql-server -y

VOLUME [ "/var/lib/cronker/db", "/var/lib/cronker/crons" ]

WORKDIR /app

RUN chmod 777 /var/lib/cronker/db
RUN chmod 777 /var/lib/cronker/crons

# Move backend files and dependencies.
COPY ./server/package*.json ./server/
RUN cd ./server && npm install
COPY ./server/ ./server/

COPY ./prisma/ ./prisma/
RUN cd ./prisma && npm install

COPY ./client/package*.json ./client/
RUN cd ./client && npm install
COPY ./client/ ./client/
RUN cd ./client && npm run build

COPY ./entrypoint.bash ./

RUN npm install pm2 -g

EXPOSE 3000

CMD [ "bash", "entrypoint.bash" ]
