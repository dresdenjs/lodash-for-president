'use strict';

const _ = require('lodash');

let haystack = ['needle', 'Heart of Gold', 'I ♡ JavaScript!', 'PHP is ' +'\u{1F4A9}', 42];

if (~(haystack.indexOf('Heart of Gold'))) {
  console.log('This is super f4st, you 1337 programmar, you!');
}

if (_.includes(haystack, 'Heart of Gold')) {
  console.log('This is for managers delight only.');
}

if (haystack.includes && haystack.includes('Heart of Gold')) {
  console.log(`This JS engine must be from the future, just like ${haystack[3]}`);
}
