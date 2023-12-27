function longestPrefix(s: string): string {
  const n = s.length
  const next: number[] = []
  next[0] = -1
  // KMP求next数组
  for (let i = 1, j = -1; i < n; i++) {
    while (j != -1 && s[j + 1] !== s[i]) j = next[j]
    if (s[j + 1] === s[i]) j++
    next[i] = j
  }

  const ret = s.substring(0, next[s.length - 1] + 1)
  return ret
}
