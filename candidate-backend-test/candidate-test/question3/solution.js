const _ = require('lodash');

function findTheLowerCaseWOrd(str) {
  let regLowerCase = /[a-z]/;
  let result = _.filter(str, v => regLowerCase.test(v)).join('');
  return result;
}

module.exports = findTheLowerCaseWOrd;