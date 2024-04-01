/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count0 = 0
  for (const item of nums) {
    if (item !== 0) continue
    count0++
  }

  for (const item of nums) {
    if (!count0) break
    if (item !== 0) continue

    const index = nums.indexOf(0)
    nums.splice(index, 1)
    nums.push(0)
    count0--
  }
}
