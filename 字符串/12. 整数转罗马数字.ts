function intToRoman(num: number): string {
  const marks = [
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
    'I'
  ]
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  let ret = ''
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      ret += marks[i]
      num -= values[i]
    }
  }

  return ret
}
