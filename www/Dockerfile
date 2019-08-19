FROM node:8-alpine
RUN mkdir /frontend
WORKDIR /frontend
COPY . /frontend
RUN npm install
EXPOSE 3000
CMD npm run dev