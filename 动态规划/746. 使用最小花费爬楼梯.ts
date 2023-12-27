function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length
    // 确定状态，其含义为，到达第n层楼梯可以继续爬，所需要的体力值
    const dp = []
    // 因此这里需要push一个0进去
    cost.push(0)

    // 初始化状态
    dp.push(cost[0])
    dp.push(cost[1])

    for(let i = 2;i <= n;i++) {
        // 状态转移方程
        dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i]
    }

    return dp[n]


};