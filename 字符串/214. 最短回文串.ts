function shortestPalindrome(s: string): string {
  // 1.暴力, 从1为位到n-1位
  // 2.二分，0/1模型
  // 3.KMP

  // aabc的最短回文是cbaabc，它由cbaaaabc去掉aabc最长回文前缀aa得到。
  // 转变成求s的最长回文前缀，s减去最长回文前缀再反转加到s的前面就可得到最短回文串

  // KMP求最长回文前缀，aabc#cbaa。由此求出来的最长前后缀必然是回文串，因为后半部分是前半部分的逆。前后相等只能是回文

  let new_s = s + '#' + s.split('').reverse().join('')
  const next = []
  next[0] = -1
  for (let i = 1, j = -1; i < new_s.length; i++) {
    while (j !== -1 && new_s[i] !== new_s[j + 1]) j = next[j]
    if (new_s[i] === new_s[j + 1]) j++
    next[i] = j
  }
  const sub_new = s.slice(next[new_s.length - 1] + 1)

  const rev = sub_new.split('').reverse().join('')

  return rev + s
}
