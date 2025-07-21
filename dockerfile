FROM php:8.2-apache
RUN apt update && apt upgrade -y
RUN docker-php-ext-install pdo_mysql
# ENV MA_SUPER_VARIABLE=truc
# rewrite url 
RUN a2enmod rewrite
COPY . /var/www/html/public
# COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf
# RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf