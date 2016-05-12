'use strict';

var _ = require('lodash');

var presenters = [{name:'Erik', fame: { guaranted : true, minutes: NaN}, present: true},
                  {name:'Christian', fame: { guaranted : undefined, minutes: Infinity}, present: true},
                  {name:'Veit', fame: {guaranted: true, minutes: 50}, present: true},
                  {name:'Achim', fame: {guaranted: true, minutes: 50}, present: false}
];

//all presenters, that are present
console.log(_.filter(presenters, {present:true}));

//all presenters with fame guaranted
console.log(_.filter(presenters, ['fame.guaranted', true]));

//names only
console.log(_.map(presenters, 'name'));

//famePredicate
let famePredicate = (obj) => obj.fame.minutes > 15;

//names of presenters with fame
console.log(_.chain(presenters)
  .filter(famePredicate)
  .map('name')
  .value());


