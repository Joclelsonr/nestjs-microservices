FROM node:22.8.0-slim

RUN apt-get update && \
    apt-get install -y openssl procps bc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app

COPY . .

RUN npm install
RUN npx prisma migrate dev
RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]