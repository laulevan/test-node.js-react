const _ = require('lodash');

function canGetNestedInside(arr1, arr2) {
	let arr1Min = _.min(arr1),
      arr2Min = _.min(arr2),
      arr1Max = _.max(arr1),
      arr2Max = _.max(arr2);
  return arr1Min > arr2Min && arr1Max < arr2Max;
}

module.exports = canGetNestedInside;