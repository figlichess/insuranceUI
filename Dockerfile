FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run ng build  --prod


FROM nginx:alpine
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
COPY --from=builder app/dist/insuranceUI usr/share/nginx/html

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]

