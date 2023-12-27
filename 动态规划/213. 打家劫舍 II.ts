function rob(nums: number[]): number {
    let n = nums.length
    if(n === 1) return nums[0]
    // dp[i][0/1]，表示，第i家不偷或偷所能获得的最大收益

    // 两种情况：1.第n家不偷，2.第1家不偷
    let dp = Array.from(Array(n), () => Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = nums[0]



    for(let i = 1;i < n;i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
        dp[i][1] = dp[i-1][0] + nums[i]
    }
    let ans1 = dp[n-1][0]


    dp[0][0] = 0
    dp[0][1] = 0
    for(let i = 1;i < n;i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
        dp[i][1] = dp[i-1][0] + nums[i]
    }
    let ans2 = Math.max(dp[n-1][0], dp[n-1][1])

    return Math.max(ans1, ans2)
};