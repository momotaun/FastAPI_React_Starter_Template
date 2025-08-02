FROM node:24.4

COPY ./app /app
RUN rm -rf /app/node_modules

WORKDIR /app
RUN npm ci

CMD ["npm", "run", "dev"]