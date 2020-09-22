const getNumberOfLayers = require('./solution');

describe('getNumberOfLayers', () => {
  test('test 1', () => {
    expect(getNumberOfLayers([
      "AAA"])).toBe(1);
  });
  
  test('test 2', () => {
    expect(getNumberOfLayers([
      "AAAA", 
      "AAAA", 
      "AAAA"])).toBe(1);
  });

  test('test 3', () => {
    expect(getNumberOfLayers([
      "AAAA", 
      "ABBA", 
      "AAAA"])).toBe(2);
  });

  test('test 4', () => {
    expect(getNumberOfLayers([
      "AAAAAAAAA", 
      "ABBBBBBBA", 
      "ABBBBBBBA", 
      "ABBBBBBBA", 
      "AAAAAAAAA"])).toBe(2);
  });

  test('test 5', () => {
    expect(getNumberOfLayers([
      "AAAAAAAAA", 
      "ABBBBBBBA", 
      "ABBAAABBA", 
      "ABBBBBBBA", 
      "AAAAAAAAA"])).toBe(3);
  });

  test('test 6', () => {
    expect(getNumberOfLayers([
      "AAAAAAAAA", 
      "ABBBBBBBA", 
      "ABCCCCCBA", 
      "ABBBBBBBA", 
      "AAAAAAAAA"])).toBe(3);
  });

  test('test 7', () => {
    expect(getNumberOfLayers([
      "AAAAAAAAAAA", 
      "AABBBBBBBAA",
      "AABCCCCCBAA",
      "AABCAAACBAA",
      "AABCABACBAA", 
      "AABCAAACBAA",
      "AABCCCCCBAA",
      "AABBBBBBBAA",
      "AAAAAAAAAAA"])).toBe(5);
  });

  test('test 8', () => {
    expect(getNumberOfLayers([
      "AAAAAAAAAAA", 
      "AABBBBBBBAA",
      "AABCCCCCBAA",
      "AABCDDDCBAA",
      "AABCDDDCBAA", 
      "AABCDDDCBAA",
      "AABCCCCCBAA",
      "AABBBBBBBAA",
      "AAAAAAAAAAA"])).toBe(4);
  });

  test('test 9', () => {
    expect(getNumberOfLayers([
      "FFFFFFFFFFFFFFFFFFFFFFFFF",
      "FFFFFFFFFFFFFFFFFFFFFFFFF",
      "FFFFGGGGGGGGGGGGGGGGGFFFF",
      "FFFFGGGAAAAAAAAAAAGGGFFFF", 
      "FFFFGGGAABBBBBBBAAGGGFFFF",
      "FFFFGGGAABCCCCCBAAGGGFFFF",
      "FFFFGGGAABCDDDCBAAGGGFFFF",
      "FFFFGGGAABCDDDCBAAGGGFFFF", 
      "FFFFGGGAABCDDDCBAAGGGFFFF",
      "FFFFGGGAABCCCCCBAAGGGFFFF",
      "FFFFGGGAABBBBBBBAAGGGFFFF",
      "FFFFGGGAAAAAAAAAAAGGGFFFF", 
      "FFFFGGGGGGGGGGGGGGGGGFFFF", 
      "FFFFFFFFFFFFFFFFFFFFFFFFF", 
      "FFFFFFFFFFFFFFFFFFFFFFFFF"])).toBe(6);
  });
});


