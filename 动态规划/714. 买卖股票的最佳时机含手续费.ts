function maxProfit(prices: number[], fee: number): number {
    let n = prices.length
    // dp[n][0/1]，表示第n天手里有股票/无股票，所能获得的最大收入
    // dp[n][0]，手里无股票，说明前一天手里没股票或今天把股票给卖出去了
    // dp[n][1]，手里有股票，说明前一天有股票或者，前一天没股票今天买了股票
    const dp = Array.from(Array(n), () => Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for(let i = 1;i < n;i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
    }

    return Math.max(dp[n-1][0], dp[n-1][1])
};