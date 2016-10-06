#Check valid ISBN number package

[![Build Status](https://travis-ci.org/quocbaost1890/isbn.svg?branch=master)](https://travis-ci.org/quocbaost1890/isbn)
[![Coverage Status](https://coveralls.io/repos/github/quocbaost1890/isbn/badge.svg)](https://coveralls.io/github/quocbaost1890/isbn)
[![Stable Version](https://img.shields.io/npm/v/g-isbn.svg)](https://www.npmjs.com/package/g-isbn)
[![Download Status](https://img.shields.io/npm/dt/g-isbn.svg)](https://www.npmjs.com/package/g-isbn)
[![License](https://img.shields.io/github/license/quocbaost1890/isbn.svg)](https://github.com/quocbaost1890/isbn/blob/master/LICENSE)

A small package to check valid ISBN number

## Requirement

* Node 6

## Installation

`npm install --save g-isbn`

## Usage
```javascript
let isbn = require('g-isbn');

isbn.isValidIsbn('9780061122415', (err, s) => {
  console.log(s);
});
```

## Test

`npm test`

## Contributing

BaoNQ

## Release History

* 1.0.0 Initial release
* 1.0.3 Update README

## License

MIT
