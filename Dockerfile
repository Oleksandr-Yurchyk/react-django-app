FROM python:3.9.2-slim

EXPOSE 3000

RUN mkdir /app
WORKDIR /app

COPY requirements.txt /app/
RUN pip3 install --upgrade pip -r requirements.txt
