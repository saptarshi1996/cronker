docker rmi $(docker images -f "dangling=true" -q) --force
docker build . -t cronker
docker run -e ENV=DOCKER -v /var/lib/cronker/crons/:/var/lib/cronker/crons/ -p 8000:8000 -p 3000:3000 -d cronker
