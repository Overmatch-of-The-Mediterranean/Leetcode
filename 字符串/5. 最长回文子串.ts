function longestPalindrome(s: string): string {
  // 马拉车算法

  let new_s = '#'
  for (let i = 0; i < s.length; i++) {
    new_s += s[i] + '#'
  }

  let l = 0,
    r = -1
  let d = []
  for (let i = 0; i < new_s.length; i++) {
    if (i > r) {
      d[i] = 1
    } else {
      d[i] = Math.min(r - i, d[l + r - i])
    }

    // 朴素算法，看界外是否还有字符符合要求
    while (i - d[i] >= 0 && new_s[i - d[i]] === new_s[i + d[i]]) d[i]++

    // 检查区域是否可以扩大
    if (i - d[i] >= 0 && i + d[i] > r) {
      l = i - d[i]
      r = i + d[i]
    }
  }

  let ret = ''
  let temp = -1 // 临时变量，用来记录当前最大的d[i]
  for (let i = 0; i < d.length; i++) {
    if (temp >= d[i]) continue
    temp = d[i]
    ret = new_s.slice(i - d[i] + 1, i + d[i])
    ret = ret.replaceAll('#', '')
  }

  return ret
}
