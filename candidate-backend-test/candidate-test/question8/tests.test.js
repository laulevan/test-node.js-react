const howManyDaysBetweenTwoDates = require('./solution');

describe('howManyDaysBetweenTwoDates', () => {
  test('test 1', () => {
    expect(howManyDaysBetweenTwoDates(new Date('June 14, 2020'), new Date('June 20, 2020'))).toBe(6);
  });

  test('test 2', () => {
    expect(howManyDaysBetweenTwoDates(new Date('December 29, 1900'), new Date('January 1, 1900'))).toBe(-362);
  });

  test('test 3', () => {
    expect(howManyDaysBetweenTwoDates(new Date('July 20, 2020'), new Date('July 30, 2020'))).toBe(10);
  });
});


