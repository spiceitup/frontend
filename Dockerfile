FROM node:12-alpine

# Install yarn
RUN set -eux \
    & apk add \
        --no-cache \
        yarn

RUN mkdir -p /usr/src/app 
 
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN chmod +x entrypoint.sh
