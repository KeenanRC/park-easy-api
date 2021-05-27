FROM node:10-alpine as base

WORKDIR /app



COPY package.json package.json
COPY package-lock.json package-lock.json
EXPOSE 80:3000 
ENV  DB_CONNECTION_STRING=<database-connection-string> 


FROM base as prod
RUN npm ci --production
COPY . .
CMD ["npm", "start"]


FROM prod as test
RUN npm ci
COPY . .
#CMD ["npm","run","test"]