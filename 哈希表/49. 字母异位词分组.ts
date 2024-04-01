function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()

  for (const str of strs) {
    const arr = str.split('')
    arr.sort()
    let key = arr.join('')
    let list = map.get(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }

  return [...map.values()]
}
