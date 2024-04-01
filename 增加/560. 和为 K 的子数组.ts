// function subarraySum(nums: number[], k: number): number {
//     let count = 0
//     // 每次以i为结尾，从后向前累加枚举
//     for(let i = 0;i < nums.length;i++){
//         let sum = 0

//         for(let j = i;j >= 0;j--) {
//             sum += nums[j]
//             if(sum === k) count++
//         }
//     }

//     return count
// };

// 前缀和 + 哈希表
function subarraySum(nums: number[], k: number): number {
  let count = 0
  const map = new Map()
  map.set(0, 1)
  let pre = 0

  for (const x of nums) {
    pre += x

    // 这里使用最新累加的值，减去k，得到的结果，要是能在map找到，则说明pre - k ~ pre之间有一个新的和值为k的子数组
    if (map.get(pre - k)) {
      count += map.get(pre - k)
    }

    if (map.get(pre)) {
      map.set(pre, map.get(pre) + 1)
    } else {
      map.set(pre, 1)
    }
  }

  return count
}
