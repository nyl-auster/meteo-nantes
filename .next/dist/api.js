'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextHour = getNextHour;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 43.075284,1.3310 for Nantes
var position = '43.075284,1.3310';
var apiKey = 'bbdbf0021f436aab92f30921960627d5';
var lang = 'fr';

function getNextHour() {
  return "hello";
  return _axios2.default.get('https://api.darksky.net/forecast/' + apiKey + '/' + position + '?lang=fr');
}