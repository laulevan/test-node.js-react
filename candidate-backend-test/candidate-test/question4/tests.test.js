const canGetNestedInside = require('./solution');

describe('canGetNestedInside', () => {
  test('test 1', () => {
    expect(canGetNestedInside([1, 2, 3, 4], [0, 6])).toBe(true);
  });

  test('test 2', () => {
    expect(canGetNestedInside([3, 1], [4, 0])).toBe(true);
  });

  test('test 3', () => {
    expect(canGetNestedInside([9, 9, 8], [8, 9, 10])).toBe(false);
  });

  test('test 4', () => {
    expect(canGetNestedInside([9, 9, 8], [8, 9])).toBe(false);
  });

  test('test 5', () => {
    expect(canGetNestedInside([1, 2, 3, 4], [2, 3])).toBe(false);
  });
});


