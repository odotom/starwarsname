"use strict";

var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));

var _starwarsNames = _interopRequireDefault(require("./starwars-names.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray.default)(_starwarsNames.default);
module.exports = {
  all: _starwarsNames.default,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];

    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }

    return randomItems;
  }
}