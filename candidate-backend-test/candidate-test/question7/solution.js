function sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(num) {
  const totalSum = [...num + ' '].map(Number).reduce((a, b) => a + b);
	return totalSum % 2 === 1 ? 'sumOfAllDigitsIsOdd' : 'sumOfAllDigitsIsEven';
}

module.exports = sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven;