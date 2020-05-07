### STAGE 1: Build ###

FROM node:12.2.0 as  builder

# Preparing working environment.
RUN mkdir -p /usr/src/patient-portal
WORKDIR /usr/src/patient-portal

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing dependencies.
COPY package.json /usr/src/patient-portal/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9


# Copy patient-portal source into image.
COPY . /usr/src/patient-portal

# generate build
RUN ng build --output-path=dist --prod=true

### STAGE 2: Setup ###

# base image
FROM nginx:1.16.0-alpine

# Removing nginx default page.
RUN rm -rf /usr/share/nginx/html/*

# Copying nginx configuration.
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copying patient-portal source into web server root.
# COPY --from=builder /usr/src/patient-portal/src /usr/share/nginx/html
# copy artifact build from the 'build environment'
COPY --from=builder /usr/src/patient-portal/dist /usr/share/nginx/html
COPY --from=builder /usr/src/patient-portal/startServer.sh /usr/share/nginx/startServer.sh

RUN chmod a+x /usr/share/nginx/startServer.sh

# Exposing ports.
EXPOSE 80

# Starting server.
#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT [ "/usr/share/nginx/startServer.sh" ] 
