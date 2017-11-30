#!/usr/bin/env bash

# pull and build
git fetch --all
git reset --hard origin/master

npm install
npm run build

pm2 reload deployment/www.json

# after the build, clean up the dist files that are older than 2 days
find ./static/dist/main-* -mtime 2 -delete
