function dfs(buff, ret, open, close, n) {
  if (buff.length === n * 2) {
    ret.push(buff.join(''))
    return
  }

  if (open < n) {
    buff.push('(')
    dfs(buff, ret, open + 1, close, n)
    buff.pop()
  }

  if (close < open) {
    buff.push(')')
    dfs(buff, ret, open, close + 1, n)
    buff.pop()
  }
}

function generateParenthesis(n: number): string[] {
  let ret = []

  dfs([], ret, 0, 0, n)

  return ret
}
