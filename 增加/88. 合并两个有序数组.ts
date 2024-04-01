/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0
  let j = 0
  let result = []

  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      result.push(nums2[j])
      j++
    } else {
      result.push(nums1[i])
      i++
    }
  }

  if (i !== m) {
    result.push(...nums1.slice(i, m))
  }

  if (j !== n) {
    result.push(...nums2.slice(j))
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i]
  }
}
