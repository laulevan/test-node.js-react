const sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven = require('./solution');

describe('sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven', () => {
  test('test 1', () => {
    expect(sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(43)).toBe('sumOfAllDigitsIsOdd');  });

  test('test 2', () => {
    expect(sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(373)).toBe('sumOfAllDigitsIsOdd');
  });

    test('test 3', () => {
      expect(sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(55551)).toBe('sumOfAllDigitsIsOdd');
    });
});


