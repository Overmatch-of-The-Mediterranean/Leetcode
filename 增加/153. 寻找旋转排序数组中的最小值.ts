function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const pivot = (left + right) >> 1

    if (nums[pivot] < nums[right]) {
      right = pivot
    } else {
      left = pivot + 1
    }
  }

  return nums[left]
}
