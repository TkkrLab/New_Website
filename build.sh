#!/usr/bin/env bash

set -e
set -u

npm install

export HUGO_ENV="production"
./node_modules/.bin/hugo-extended --gc --minify
