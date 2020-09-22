const moveAllUppercaseLetetrsToFirst = require('./solution');

describe('moveAllUppercaseLetetrsToFirst', () => {
  test('test 1', () => {
    expect(moveAllUppercaseLetetrsToFirst('hOpPy')).toBe('OPhpy');
  });

  test('test 2', () => {
    expect(moveAllUppercaseLetetrsToFirst('moveIT')).toBe('ITmove');
  });

  test('test 3', () => {
    expect(moveAllUppercaseLetetrsToFirst('shOrtKUT')).toBe('OKUTshrt');
  });
});


