docker build . -t cronker

docker run -e ENV=DOCKER -v /var/lib/cronker/crons/:/var/lib/cronker/crons/ -p 3000:3000 -d cronker
