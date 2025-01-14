# Verwenden eines Node JS Images als Basis um die App zu bauen
FROM node:18 AS build   

#Arbeitsverzeichnis setzen
WORKDIR /app

#Abhängigkeiten installierenn
COPY package.json package-lock.json ./
RUN npm install

#Quellcode kopieren
COPY . . 
RUN npm run build

#schlankes Nginx Image verwenden
FROM nginx:stable-alpine

#Gebaute React APP in das Nginx-HTML Verzeichnis kopieren
COPY --from=build /app/build /usr/share/nginx/html

# Nginx-Konfiguration für React (optional, falls Routing verwendet wird)
COPY nginx.conf /etc/nginx/conf.d/default.conf
