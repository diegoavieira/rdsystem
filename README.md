# React Design System

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/diegoavieira/rdsystem/blob/master/LICENSE)
[![pipeline status](https://github.com/diegoavieira/rdsystem/badges/master/pipeline.svg)](https://github.com/diegoavieira/rdsystem/commits/master)
[![coverage report](https://github.com/diegoavieira/rdsystem/badges/master/coverage.svg)](https://diegoavieira.github.io/rdsystem/coverage/index.html)
[![npm downloads](https://img.shields.io/npm/dm/@rdsystem/common.svg)](https://www.npmjs.com/package/@rdsystem/common)
[![npm latest package](https://img.shields.io/npm/v/@rdsystem/common/latest.svg)](https://www.npmjs.com/package/@rdsystem/common)

Access the [documentation](https://diegoavieira.github.io/rdsystem) for more information.

## Development

Server local is run on http://localhost:8080.

```sh
npm start
```

## Test

Unit testing coverage can be found in the directory `/coverage/index.html` or [documentation test coverage](https://diegoavieira.github.io/rdsystem/coverage/index.html).

```sh
npm run test
```

## Build

Build is run with `.github/workflows`.

## Release Semver

### Feature

- In the github, create `feature/[name]` branch from `develop`.

- When finished the code, create merge request from `feature` to `develop`.

- To create a production version, create `release/[version]` branch from `develop`.

- In the local, change to `release/[version]` and run `npm run release`;

- In the github, create merge request from `release/[version]` to `master`.

- Then, create merge request from `master` to `develop`.

### Hotfix

- Create `hotfix/[name]` branch from `tag`.

- When finished the code, run `npm run release`.

- In the github, create merge request from `hotfix/[name]` to `master`.

- Then, create merge request from `master` to `develop`.
