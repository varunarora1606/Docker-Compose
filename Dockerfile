FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm i
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev:docker"]