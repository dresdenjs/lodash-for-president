'use strict';

const _ = require('lodash');

let numberTests = [NaN, Infinity, '3', 'four', 42];

let naiveIsNumber = (numberObj) => !isNaN(numberObj);

let naiveResults = _.map(numberTests, naiveIsNumber);
let realResults = _.map(numberTests, _.isNumber);

console.log('TestNumbers : ', numberTests);
console.log('naiveResults: ', naiveResults);
console.log('realResults : ', realResults);
