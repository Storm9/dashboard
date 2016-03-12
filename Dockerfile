FROM centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN npm install grunt-cli -g
RUN cd /src; npm install --production
ADD Gruntfile.js /src/Gruntfile.js
ADD package.json /src/package.json


# Bundle app source
COPY . /server
RUN cd ..
EXPOSE  9000

CMD ["npm", "start"]
