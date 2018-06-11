'use strict';

module.exports = exports = {};

exports.add = (num1, num2) => {
  if(typeof num1 == 'number' && typeof num2 == 'number'){
    return num1 + num2;
  } else {return null;}
};
  
exports.sub = (num1, num2) => {
  if(typeof num1 == 'number' && typeof num2 == 'number'){
    return num2 - num1;
  } else {return null;}
};