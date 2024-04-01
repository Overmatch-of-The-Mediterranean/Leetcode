function partition(s: string): string[][] {
  function check(i) {
    if (i === n) {
      ret.push(buff.slice(0))
      return
    }

    for (let j = i; j < n; j++) {
      if (f[i][j]) {
        buff.push(s.substring(i, j + 1))
        check(j + 1)
        buff.pop()
      }
    }
  }

  let ret = []
  let buff = []
  let n = s.length
  let f = Array(n)
    .fill(0)
    .map(i => Array(n).fill(true))

  // 需要到这来，正在来会出错，例如，处理i=1,j=4时，需要用到i=2,j=3的结果，正着来此时i=2,j=3还没处理出来
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      f[i][j] = f[i + 1][j - 1] && s[i] === s[j]
    }
  }
  console.log('f', f)
  check(0)

  return ret
}
