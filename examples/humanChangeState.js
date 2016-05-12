'use strict';

const _ = require('lodash');

function changeState (fromState, toState) {
  let allowedTransitions =
    [{from:'PENDING', to:'ACCEPTED'}, {from:'PENDING', to:'REJECTED'},
    {from:'PENDING', to:'DENIED'}, {from:'REJECTED', to:'CANCELED'},
    {from:'ACCEPTED', to:'CANCELED'}, {from:'ACCEPTED', to:'CLOSED'}];
  let validStateChangeFound = _.find(allowedTransitions, {from:fromState, to:toState});
  if (validStateChangeFound)
  {
    console.log(`changing from: ${fromState} to ${toState}`);
  } else {
    console.error(`invalid stateChange from: ${fromState} to: ${toState}`);
  }
}

changeState(process.argv[2], process.argv[3]);