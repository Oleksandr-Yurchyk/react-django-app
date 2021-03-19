FROM node:slim

WORKDIR /app/users_fe
COPY package.json /app/users_fe

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
