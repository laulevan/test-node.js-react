const convertToArray = require('./solution');
const _ = require('lodash');

describe('convertToArray', () => {  
  test('test 1', () => {
    expect(_.isEqual(convertToArray({ D: 1, B: 2, C: 3}).sort(), [['D', 1], ['B', 2], ['C', 3]].sort())).toBe(true);
  });

  test('test 1', () => {
    expect(_.isEqual(convertToArray({ attA: 2, attB: 3, attC: 10}).sort(), [['attA', 2], ['attB', 3], ['attC', 10]].sort())).toBe(true);
  });
});
