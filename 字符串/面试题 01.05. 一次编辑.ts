function oneEditAway(first: string, second: string): boolean {
  if (Math.abs(first.length - second.length) > 1) return false

  if (first.length < second.length) {
    let temp = first
    first = second
    second = temp
  }
  const n = first.length
  const m = second.length

  if (n === m) {
    for (let i = 0, j = 0; i < n; i++) {
      if (first[i] === second[i]) continue
      j++
      if (j === 2) return false
    }
    return true
  }

  let i = 0,
    j = m - 1

  // 从左往右扫描
  while (i < m && first[i] === second[i]) i++
  // 从右往左扫描
  while (j >= 0 && first[j + 1] === second[j]) j--

  return i > j
}
