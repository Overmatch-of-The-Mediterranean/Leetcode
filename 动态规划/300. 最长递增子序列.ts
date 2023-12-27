function lengthOfLIS(nums: number[]): number {
    // dp[n]代表，以n位置为结尾的，所能获得的最长递增子序列的长度
    // dp[n] = dp[j] + 1，要满足n > j，且nums[n] > nums[j]
    // 初始化各个位置的结果为1
    const dp = Array(nums.length).fill(1)
    let ans = 0
    for(let i = 0;i < nums.length;i++) {
        for(let j = 0;j < i;j++) {
            if(nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1,dp[i])
        }
        ans = Math.max(dp[i], ans)
    }

    return ans
};