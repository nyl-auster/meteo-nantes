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
  return 'test';
  //  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=sfiRgM0B2ED86VGwazZXRhvO9wSirGBdBbLIBK4Y&count=10`)
}