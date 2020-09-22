const _ = require('lodash');

function moveAllUppercaseLetetrsToFirst(s) {
  let regUppercase = /[A-Z]/;
  const result = _.sortBy([...s], l => regUppercase.test(l) ? -1 : 0).join('');
  return result;
}

module.exports = moveAllUppercaseLetetrsToFirst;