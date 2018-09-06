[![Build Status](https://travis-ci.org/odotom/starwarsname.svg?branch=master)](https://travis-ci.org/odotom/starwarsname)

# odo-starwars-name

[![travis build](https://img.shields.io/travis/odotom/starwarsname.svg?style=flat-square)](https://travis-ci.org/odotom/starwarsname)
[![codecov coverage](https://img.shields.io/codecov/c/github/odotom/starwarsname.svg?style=flat-square)](https://codecov.io/github/odotom/starwarsname)
[![version](https://img.shields.io/npm/v/odo-starwars-name.svg?style=flat-square)](http://npm.im/odo-starwars-name)
[![downloads](https://img.shields.io/npm/dm/starwarsname.svg?style=flat-square)](http://npm-stat.com/charts.html?package=odo-starwars-name&from=2018-08-01)
[![MIT License](https://img.shields.io/npm/l/odo-starwars-name.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

This package is distributed via npm:

```
npm install odo-starwars-name
```

## Usage

```javascript
const names = require('odo-starwars-name')
const allNames = names.all
const randomName = names.random()
const threeRandomNames = names.random(3)
```

## Other

This library was initially developed by [kentcdodds](https://twitter.com/kentcdodds) as part of an
[egghead.io](http://egghead.io/) series called "How to Write a JavaScript Library." and is the current status of running that tutorial. The original repo can be found at https://github.com/kentcdodds/starwars-names.
Many thanks to Kent for an awesome tutorial! :+1:
