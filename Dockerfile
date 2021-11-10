FROM node:latest

RUN mkdir -p /appfolder

COPY ./ /appfolder

WORKDIR /appfolder

RUN cd /appfolder

RUN npm install --progress=false --unsafe-perm

EXPOSE 1337

CMD [ "npm", "run" , "develop" ]