function productExceptSelf(nums: number[]): number[] {
  // 左右乘积列表
  let leftMul = []
  let rightMul = []
  leftMul[0] = 1
  rightMul[nums.length - 1] = 1

  for (let i = 1; i < nums.length; i++) {
    leftMul[i] = leftMul[i - 1] * nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightMul[i] = rightMul[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftMul[i] * rightMul[i]
  }

  return nums
}
