const minWindow = (s, t) => {
  let minLen = s.length + 1
  let start = s.length

  let missingType = 0
  let map = {}

  // 收集缺失的种类和字符对应的个数
  for (const x of t) {
    if (!map[x]) {
      missingType++
      map[x] = 1
    } else {
      map[x]++
    }
  }

  let l = 0
  let r = 0
  for (; r < s.length; r++) {
    const rightStr = s[r]
    if (map[rightStr] !== undefined) map[rightStr]--
    if (map[rightStr] === 0) missingType--

    while (missingType === 0) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1
        start = l
      }

      const leftStr = s[l]

      if (map[leftStr] !== undefined) map[leftStr]++
      if (map[leftStr] > 0) missingType++

      l++
    }
  }
  if (start === s.length) return ''
  return s.substring(start, start + minLen)
}
