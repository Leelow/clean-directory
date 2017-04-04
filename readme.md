# clean-directory

[![Greenkeeper badge](https://badges.greenkeeper.io/Leelow/clean-directory.svg)](https://greenkeeper.io/)
[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
<!--- [![Codacy Coverage][codacy-coverage-image]][codacy-coverage-url] --->
<!--- [![Codacy Grade][codacy-grade-image]][codacy-grade-url] --->
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

A tiny module to clean a directory selecting which files or directories to keep.

## Install

```
$ npm install --save clean-directory
```

## Usage

```js
const invert = require('clean-directory');

// empty the directory
clean('/path/to/dir'); 

// empty the directory keeping a and its contents
clean('/dir', 'a/**');

// multiple patterns are possible
clean('/dir', ['a/**', 'b/**']);
```

## Test and coverage
You just have to clone the repo and run

```
$ npm test
$ npm run coverage
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[downloads-image]: https://img.shields.io/npm/dt/clean-directory.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/clean-directory
[travis-image]: https://travis-ci.org/Leelow/clean-directory.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/clean-directory
[appveyor-image]: https://ci.appveyor.com/api/projects/status/4qbyuoo6kvxab4b5?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/clean-directory
<!--- [codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/be1d56eb162d41a586ecac79685161f7 --->
<!--- [codacy-coverage-url]: https://www.codacy.com/app/Leelow/clean-directory?utm_source=github.com&utm_medium=referral&utm_content=Leelow/clean-directory&utm_campaign=Badge_Coverage --->
<!--- [codacy-grade-image]: https://api.codacy.com/project/badge/Grade/be1d56eb162d41a586ecac79685161f7 --->
<!--- [codacy-grade-url]: https://www.codacy.com/app/Leelow/clean-directory?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/clean-directory&amp;utm_campaign=Badge_Grade --->
[dev-dependencies-image]: https://david-dm.org/leelow/clean-directory/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/clean-directory?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
