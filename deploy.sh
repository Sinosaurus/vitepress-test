#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf dist

mv -i docs/.vitepress/dist ./

git add .
git commit -m 'deploy'
git push

cd -