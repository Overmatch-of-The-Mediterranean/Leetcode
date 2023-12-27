function rob(nums: number[]): number {
    const n = nums.length
    // 递推状态：dp[n][0/1]代表，偷或不偷第n家的收益
    // 递推公式
    //      dp[n][0] = Math.max(dp[n-1][0], dp[n-1][1])
    //      dp[n][1] = dp[n-1][0] + nums[i]
    // 递推状态：因为dp[n][0/1]只却决于dp[n-1][0/1]，所以存储两个状态即可
    const dp:number[][] = Array()
    for(let i = 0;i < 2;i++) dp.push(Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = nums[0]

    for(let i = 1;i < n;i++) {
        // 滚动数组
        const index = i % 2
        const preIndex = index === 0 ? 1 : 0

        dp[index][0] = Math.max(dp[preIndex][0], dp[preIndex][1])
        dp[index][1] = dp[preIndex][0] + nums[i]
    }

    return Math.max(dp[(n-1) % 2][0], dp[(n-1) % 2][1])

};