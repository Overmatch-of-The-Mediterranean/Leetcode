function repeatedSubstringPattern(s: string): boolean {
  // const next:number[] = []
  // next[0] = -1
  // // 利用KMP求next数组的思想
  // // 以每一位作为结尾的最长后缀长度
  // for(let i = 1, j = -1; s[i]; i++) {
  //     while(j !== -1 && s[i] !== s[j+1]) j = next[j]
  //     if(s[j+1] === s[i]) j++
  //     next[i] = j
  // }

  // return next[s.length-1] !== -1 && (s.length % (s.length - next[s.length-1] - 1)) === 0

  let pos = 0
  const n = s.length
  while ((pos = s.indexOf(s[0], pos + 1)) !== -1) {
    if (n % pos) continue

    let flag = 0
    for (let i = pos; i < n; ) {
      for (let j = 0; j < pos; j++) {
        if (s[i] === s[j]) {
          i++
        } else {
          i++
          flag = 1
          break
        }
      }
    }
    // 只要有一个字串可以组成即可
    if (flag === 0) return true
  }

  if (pos === -1) return false
  return true
}
