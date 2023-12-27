// 滑动窗口
function check(l: number, s: string) {
  let k = 0 // 记录种类数
  let count = []
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) k++
    count[s[i]] ? count[s[i]]++ : (count[s[i]] = 1)
    if (i >= l) {
      count[s[i - l]]--
      if (count[s[i - l]] === 0) k--
    }

    if (k === l) return true
  }

  return false
}

function lengthOfLongestSubstring(s: string): number {
  if (s === '') return 0
  let head = 1
  let tail = s.length
  // 二分
  while (head < tail) {
    let middle = (head + tail + 1) >> 1
    if (check(middle, s)) head = middle
    else tail = middle - 1
  }

  return head
}
