FROM httpd:2.4.39-alpine

COPY ./site/ /usr/local/apache2/htdocs/
COPY ./site/.well-known/ /usr/local/apache2/htdocs/.well-known
EXPOSE 80

