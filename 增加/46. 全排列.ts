function permute(nums: number[]): number[][] {
  function dfs(index, buff, ret, nums) {
    if (index === nums.length) {
      ret.push(buff.slice(0))
    }

    for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
        map.add(nums[i])
        buff.push(nums[i])
        dfs(index + 1, buff, ret, nums)
        map.delete(nums[i])
        buff.pop()
      }
    }
  }

  const map = new Set()
  let ret = []

  dfs(0, [], ret, nums)

  return ret
}
