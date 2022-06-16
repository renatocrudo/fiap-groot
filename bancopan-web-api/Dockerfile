FROM python:3.8.2-slim

ENV PYTHONPATH=.:/usr/lib/python3.8/site-packages:/usr/src/app
WORKDIR /usr/src/app

ADD requirements.txt .
RUN apt-get update
RUN apt-get install gcc g++ make build-essential \
    git libxml2 python3-dev

RUN pip3 install -r requirements.txt

ARG env=prod

CMD ["run-program", "python3", "bancopan-web-api/wsgi.py"]

EXPOSE 8888