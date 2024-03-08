FROM node:20-alpine3.19

WORKDIR /base

COPY ["tsconfig.json", "./tsconfig.json"]
COPY ["package.json", "./package.json"]
COPY ["package-lock.json", "./package-lock.json"]

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY  . .

RUN cd /base && npm run build


CMD ["./start.sh"]

EXPOSE 3000