function findAnagrams(s: string, p: string): number[] {
  let result = []
  let sLen = s.length
  let pLen = p.length
  let sCount = new Array(26).fill(0)
  let pCount = new Array(26).fill(0)

  if (sLen < pLen) return []

  for (let i = 0; i < pLen; i++) {
    sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    pCount[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  if (sCount.join('') === pCount.join('')) result.push(0)

  for (let i = 0; i < sLen - pLen; i++) {
    sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    sCount[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)]++

    if (sCount.join('') === pCount.join('')) result.push(i + 1)
  }

  return result
}
