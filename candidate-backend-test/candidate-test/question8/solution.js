function howManyDaysBetweenTwoDates(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  return (date2 - date1) / oneDay;
}

module.exports = howManyDaysBetweenTwoDates;