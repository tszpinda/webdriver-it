# webdriver-it

npm install
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:2.52.0

npm test

if running behind proxy start you docker container with:
docker run -d -p 4444:4444 -e HTTPS_PROXY=$HTTPS_PROXY -e https_proxy=$http_proxy -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:2.52.0
