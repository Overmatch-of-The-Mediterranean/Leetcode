function topKFrequent(nums: number[], k: number): number[] {
  let arr = []
  let map = new Map()
  let ans = []

  for (let i = 0; i < nums.length; i++) {
    map.get(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1)
  }

  for (const item of map) {
    arr.push(item)
  }

  arr.sort((a, b) => {
    return b[1] - a[1]
  })

  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0])
  }

  return ans
}
