function strStr(haystack: string, needle: string): number {
  //// KPM
  // let next = []
  // next[0] = -1
  // for(let i = 1, j = -1; i < needle.length; i++) {
  //     while(j !== -1 && needle[i] !== needle[j+1]) j = next[j]
  //     if(needle[i] === needle[j+1]) j++
  //     next[i] = j
  // }
  // console.log('next', next)
  // for(let i = 0, j = -1;i < haystack.length; i++) {
  //     while(j !== -1 && haystack[i] !== needle[j+1]) j = next[j]
  //     if(haystack[i] === needle[j+1]) j++
  //     if(needle[j + 1] === undefined) return i - j
  // }

  // return -1

  // Sunday
  const m = needle.length
  const index = Array(128).fill(-1)
  for (let i = 0; i < needle.length; i++) index[needle[i]] = i

  let i = 0
  while (i + m <= haystack.length) {
    let flag = 1
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = 0
        break
      }
    }
    if (flag) return i
    let last_index = index[haystack[i + m]] ?? 0
    i += m - last_index
  }
  return -1
}
