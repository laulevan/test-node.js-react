const findTheLowerCaseWOrd = require('./solution');

describe('findTheLowerCaseWOrd', () => {
  test('test 1', () => {
    expect(findTheLowerCaseWOrd('UdUNTFYGoFYFYGBVtNUXHUYTYM')).toBe('dot');
  });

  test('test 2', () => {
    expect(findTheLowerCaseWOrd('bETYEPOFGBuFOIUBRrHgUHlNFYaYYYr')).toBe('burglar');
  });

  test('test 3', () => {
    expect(findTheLowerCaseWOrd('YFbmHSEUFBbezFBYzFBYLleGBYEFGBMENTmenz')).toBe('bmbezzlemenz');
  });

  test('test 4', () => {
    expect(findTheLowerCaseWOrd('cLRXSNVVJVOJBIQXRRVKIZWKJOIVRHXELRVReLXSNRVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIRVHXELVRaLXSNVVXXJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJRVOJBIQRVKIZWKJMNOIVHXELVRn')).toBe('certain');
  });

  test('test 5', () => {
    expect(findTheLowerCaseWOrd('cUEOYCSNMOUTFGHJUXVOaUEOYCSJHFDTNPMUXVOt')).toBe('cat');
  });
});


