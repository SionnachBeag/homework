import { convertToRoman } from './convert';

describe('convertToRoman', () => {
  it(`should equal XII if number entered was 12`, () => {
    expect(convertToRoman(12)).toEqual('XII');
  });

  it(`should equal MDXIV if number entered was 1514`, () => {
    expect(convertToRoman(1514)).toEqual('MDXIV');
  });

  it(`should equal MMMCMXCIX if number entered was 3999`, () => {
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX');
  });

  it(`should throw error if number entered was negative or 0`, () => {
    expect(() => {
      convertToRoman(-12.99);
    }).toThrowError('Number entered was 0 or negative.');
  });

  it(`should throw error if number entered was negative or 0`, () => {
    expect(() => {
      convertToRoman(0);
    }).toThrowError('Number entered was 0 or negative.');
  });

  it(`should throw error if number entered was not a whole number`, () => {
    expect(() => {
      convertToRoman(12.99);
    }).toThrowError('Number entered was a decimal number.');
  });
});
