function letterCombinations(digits: string): string[] {
  if (digits === '') return []

  function dfs(index, buff, ret, digits) {
    if (index === digits.length) {
      ret.push(buff.slice(0).join(''))
      return
    }

    let temp = map[digits[index]]

    for (let i = 0; i < temp.length; i++) {
      buff.push(temp[i])
      dfs(index + 1, buff, ret, digits)
      buff.pop()
    }
  }

  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  let ret = []

  dfs(0, [], ret, digits)

  return ret
}
