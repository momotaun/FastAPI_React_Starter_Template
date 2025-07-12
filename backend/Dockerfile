FROM python:3.13-alpine3.21
LABEL maintainer="moeketsimotaung.me"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt requirements.txt
COPY ./app /app

WORKDIR /app
EXPOSE 8000

RUN python -m venv /opt && \
    /opt/bin/pip install --upgrade pip && \
    /opt/bin/pip install -r /requirements.txt && \
    adduser --disabled-password --no-create-home app

ENV PATH="/opt/bin:$PATH"

USER app