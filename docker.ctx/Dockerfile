FROM ubuntu:16.04
MAINTAINER erich.arnold@arris.com

RUN apt-get update && apt-get install -y inetutils-* curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update && apt-get install -y nodejs 
RUN npm install -g grunt-cli bower arangojs

WORKDIR /usr/src/app

COPY ./sb-admin-angular.tgz ./
RUN tar xzf sb-admin-angular.tgz

EXPOSE 8000

COPY ./entrypoint.sh /
RUN chmod 777 /entrypoint.sh
CMD ["/entrypoint.sh"]
