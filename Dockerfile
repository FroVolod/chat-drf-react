FROM python:3-alpine
RUN mkdir /backend
WORKDIR /backend
COPY . /backend
RUN pip install -r requirements.txt
EXPOSE 8000
RUN python manage.py migrate
CMD python manage.py runserver 0.0.0.0:8000