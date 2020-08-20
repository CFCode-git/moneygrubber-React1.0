#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&

# github
#git remote add origin git@github.com:CFCode-git/moneygrubber-React-website1.0.git &&

# gitee
git remote add origin git@gitee.com:chowq/moneygrubber-react-website1.0.git &&

git push -u origin master -f
cd -
