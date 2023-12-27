function minMoves2(nums: number[]): number {
    // 对应仓库选址的问题
    // 中位数所消耗的操作次数最少

    nums.sort((a,b) => a-b)
    const mid = nums[Math.floor(nums.length / 2)]

    let ans = nums.reduce((pre,cur)=>{
        return pre + Math.abs(cur - mid)
    }, 0)

    return ans
};