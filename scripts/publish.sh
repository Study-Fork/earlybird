#!/bin/bash

# Start in tasks/ even if run from root directory
yarn build
cp -R packages/earlybird-app/build/* ../holaxearlybirds.github.io
pushd ../holaxearlybirds.github.io
git pull && git add . && git commit -m 'Publish sites'
git push
popd