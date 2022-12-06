export function convertToRoman(int: number): string {
  let result: string = '';
  let arabic: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman: string[] = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  if (int < 1) {
    throw new Error('Number entered was 0 or negative.');
  }
  if (int - Math.floor(int) !== 0) {
    throw new Error('Number entered was a decimal number.');
  }

  for (let i: number = 0; i < arabic.length; i++) {
    while (int >= arabic[i]) {
      int = int - arabic[i];
      result += roman[i];
    }
  }
  return result;
}

console.log(convertToRoman(1514));
