'use strict';

const _ = require('lodash');

let undef;
let nil = null;

if (!undef) {
  console.log('undef is not undefined');
}

if (!nil) {
  console.log('nil seems to be undefined');
}

if (_.isUndefined(undef)) {
  console.log('undef is really undefined');
}