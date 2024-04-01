function maxArea(height: number[]): number {
  let i = 0
  let j = height.length - 1
  let ans = 0
  while (i < j) {
    ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]))
    if (height[i] >= height[j]) j--
    else if (height[i] < height[j]) i++
  }

  return ans
}
