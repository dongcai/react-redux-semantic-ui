# update pm2
> sudo npm install pm2@latest -g ; pm2 update

# initial setup so reboot will automatically start react_server and api_server
> sudo su -c "env PATH=$PATH:/usr/local/bin pm2 startup ubuntu -u ubuntu --hp /home/ubuntu"
> cd /var/www/frontend_v3
> pm2 start deployment/staging.json (beta.json or www.json)
> pm2 save

# pull and build code for frontend changes only
> cd /var/www/frontend_v3
> sh deployment/build.sh

# Daily deployment and unit test (staging.brilent.com/mocha)
> cd /var/www/frontend_v3
> sh deployment/deploy.sh

# force restart if it is needed (api_server code changes for example)
# restart api_server or react_server or both
> pm2 restart deployment/staging.json --only api_server (beta.json or www.json)
> pm2 restart deployment/staging.json --only react_server (beta.json or www.json)
> pm2 restart deployment/staging.json (beta.json or www.json)

# hard restart
> pm2 delete all
> pm2 start deployment/staging.json (beta.json or www.json)

# reboot if it is needed
> sudo reboot

# deployment tier level explain
## dev (http://brilent2.dev:3000/): sandbox database, offline, lower performance due to dev tools, development
## staging (http://staging.brilent.com): sandbox database, online, same performance as WWW, test experimental features online, deploy randomly during the day
## beta (http://beta.brilent.com): production database, online, same performance as WWW, release candidate, deploy hours before www and monitors unit tests
## www (http://www.brilent.com): production database, online, performance should be fast, live, usually deploy daily after 6pm
