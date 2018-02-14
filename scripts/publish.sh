#!/bin/bash

# Start in tasks/ even if run from root directory
cd "$(dirname "$0")"
echo "$0"

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Aborting."
  exit 1
fi

# Go!
./node_modules/.bin/lerna publish --independent "$@"