function change(amount: number, coins: number[]): number {
    // dp[i][j]，表示前i种硬币，凑成j金额的组合数，不包括重复组合
    // dp[i][j] = dp[i-1][j] + dp[i][j-coins[i]] + 1
    // 二维dp转一维dp，从前往后更新
    const dp = Array(amount+1).fill(0)
    dp[0] = 1
    for(let i = 0;i < coins.length ;i++) {
        for(let j = coins[i];j <= amount;j++) {
            dp[j] += dp[j-coins[i]]
        }
    }

    return dp[amount]
};