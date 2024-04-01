function threeSum(nums: number[]): number[][] {
  let result = []
  let n = nums.length
  nums.sort((a, b) => a - b)

  // 枚举first指针
  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    // 第三个指针永远指向最后一个元素
    let third = n - 1
    // b + c = -a
    let target = -nums[first]

    // 枚举second指针
    for (let second = first + 1; second < n; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }
      // 移动third指针，进行匹配判断
      while (second < third && nums[second] + nums[third] > target) {
        third--
      }

      if (second === third) {
        break
      }

      if (nums[second] + nums[third] === target) {
        let arr = [nums[first], nums[second], nums[third]]
        result.push(arr)
      }
    }
  }

  return result
}
