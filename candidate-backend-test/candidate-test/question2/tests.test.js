const insertArrayInTheMiddle = require('./solution');
const _ = require('lodash');

describe('insertArrayInTheMiddle', () => {
  test('test 1', () => {
    expect(_.isEqual(insertArrayInTheMiddle([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]).sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort())).toBe(true);
  });
  
  test('test 2', () => {
    expect(_.isEqual(insertArrayInTheMiddle([15, 1400], [45, 12, 35]).sort(), [15, 45, 12, 35, 1400].sort())).toBe(true);
  });
  
  test('test 3', () => {
    expect(_.isEqual(insertArrayInTheMiddle(['x', 'y'], ['zzz', 'abc', '123']).sort(), ['x', 'zzz', 'abc', '123', 'y'].sort())).toBe(true);
  });
  
  test('test 4', () => {
    expect(_.isEqual(insertArrayInTheMiddle([true, false], [false, true, null, undefined]).sort(), [true, false, true, null, undefined, false].sort())).toBe(true);
  });
});

