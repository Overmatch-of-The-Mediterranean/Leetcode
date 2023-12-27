function minimumTotal(triangle: number[][]): number {
    const n = triangle.length
    // 确定状态。dp(i,j)代表: 从下往上，到达第i,j位置的最小路径和
    // 确定递推方程 dp[i][j] = dp[i+1][j] + dp[i+1][j+1] + triangle[i][j]
    // 因为dp[i]只依赖于dp[i+1]，所以dp中有两项即可，使用滚动数组

    const dp:number[][] = Array(2)
    for(let i = 0; i < 2;i++) dp[i] = Array(n).fill(0)

    // 初始化状态(分析边界条件)
    dp[(n-1)%2] = triangle[n-1].slice()

    for(let i = n - 2;i >= 0 ;i--) {
        // 滚动数组
        let index = i % 2
        let next_index = index === 1 ? 0:1

        for(let j = 0;j <= i;j++) {
            dp[index][j] = Math.min(dp[next_index][j],dp[next_index][j+1]) + triangle[i][j]
        }
    }

    return dp[0][0]
};