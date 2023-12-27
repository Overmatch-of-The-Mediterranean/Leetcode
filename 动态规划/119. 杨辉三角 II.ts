function getRow(rowIndex: number): number[] {
    // dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    // dp[i]只依赖于dp[i-1]，所以dp只存放两项，然后使用滚动数组
    const dp = []
    for(let i = 0;i < 2;i++) dp.push(Array(rowIndex+1).fill(0))
    dp[0][0] = 1
    dp[1][0] = 1
    dp[1][1] = 1

    for(let i = 2;i < rowIndex + 1;i++) {
        // 滚动数组
        const index = i % 2
        const pre_index = index === 1 ? 0 : 1
        dp[index][0] = 1
        for(let j = 1;j <= i;j++) {
            dp[index][j] = dp[pre_index][j-1] + dp[pre_index][j]
        }
    }

    return dp[rowIndex % 2]
};