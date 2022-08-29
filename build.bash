docker build . -t cronker

docker run -e ENV=DOCKER -v /var/lib/cronker/crons/:/var/lib/cronker/crons/ -p 8080:8080 -d cronker
