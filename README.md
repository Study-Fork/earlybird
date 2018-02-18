# earlybird

- http://earlybird.live

## Getting Started

#### Prerequisites

Required | Description
--|--
[Git](https://git-scm.com/) | We follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
[Node.js](nodejs.org) | 8.9.4 LTS
[Yarn](https://yarnpkg.com/lang/en/) | 1.3.2

#### Install Node, Yarn

The project manages the version of node through `nvm`.

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ command -v nvm
$ nvm install 8.9.4
$ which node
$ npm install -g yarn
```

In the project root as follows are performed through the `.nvmrc`

```
$ nvm use
Found '/Users/user/Github/mint/.nvmrc' with version <8.9.4>
Now using node v8.9.4 (npm v5.6.0)
```

## Yarn Commands

### Install project

```bash
$ nvm use
Found '/Users/user/Github/mint/.nvmrc' with version <8.9.4>
Now using node v8.9.4 (npm v5.6.0)
$ yarn
```

### Check Lint

```bash
$ yarn lint
$ yarn lint:report # Generate reports
```

### Test

```bash
$ yarn test
```

### Run

```
$ yarn start
```

#### Configure hosts

Hosts must be registered in development, because of Facebook API policie.

`/etc/hosts`
```
127.0.0.1 dev.earlybird.live:3000
```

### Interactive UI component dev & test

```
$ yarn storybook
```

## Build for Production

```bash
$ yarn build
...
Creating an optimized production build...
$ cd packages/earlybird-app/build
```

## Integration with CI

`Shell Script is here`

```bash
#!/bin/bash

. $HOME/.bashrc

nvm use
yarn
yarn lint:report
yarn coverage
```

## License

```
The YOLO License (YOLO)

Copyright (c) 2017 Minhyeok Jung

Life is wonderful, You Only Live Once!
```