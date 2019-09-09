### STAGE 1: Build ###

FROM node:12.2.0 as  builder

# Preparing working environment.
RUN mkdir -p /usr/src/alerts-demo
WORKDIR /usr/src/alerts-demo

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing dependencies.
COPY package.json /usr/src/alerts-demo/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9


# Copy alerts-demo source into image.
COPY . /usr/src/alerts-demo

# generate build
RUN ng build --output-path=dist

### STAGE 2: Setup ###

# base image
FROM nginx:1.16.0-alpine

# Removing nginx default page.
RUN rm -rf /usr/share/nginx/html/*

# Copying nginx configuration.
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copying alerts-demo source into web server root.
# COPY --from=builder /usr/src/alerts-demo/src /usr/share/nginx/html
# copy artifact build from the 'build environment'
COPY --from=builder /usr/src/alerts-demo/dist /usr/share/nginx/html

# Exposing ports.
EXPOSE 80

# Starting server.
CMD ["nginx", "-g", "daemon off;"]
