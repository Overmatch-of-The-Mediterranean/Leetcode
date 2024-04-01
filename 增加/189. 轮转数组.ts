/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let result = []
  let n = nums.length

  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = nums[i]
  }

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i]
  }
}
