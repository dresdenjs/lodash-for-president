var _ = require('lodash');

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

_.forOwn(obj, function (value, key) {
  console.log('obj.' + key + ' = ' + value);
});
