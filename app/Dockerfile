FROM node:20-alpine3.19

WORKDIR /base

COPY ["tsconfig.json", "./tsconfig.json"]
COPY ["package.json", "./package.json"]
COPY ["package-lock.json", "./package-lock.json"]

COPY . .

RUN npm install

RUN cd /base && npm run build

CMD ["npm", "start"]

EXPOSE 3000