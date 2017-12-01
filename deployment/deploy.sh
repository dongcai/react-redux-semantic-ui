#!/usr/bin/env bash

# if you set up your project to pull from GIT, then uncomment the following two lines.
#git fetch --all
#git reset --hard origin/master

npm install
npm run build

pm2 reload deployment/www.json

# after the build, clean up the dist files that are older than 2 days
find ./static/dist/main-* -mtime 2 -delete
