function coinChange(coins: number[], amount: number): number {
    // 最少硬币个数受凑的目标值钱的影响
    // dp[n]代表，凑成n需要的最少硬币个数
    // dp[n] = dp[n-vi] + 1，在dp[n-vi](vi代表硬币的取值)基础上+1，还需要判断dp[n-vi]是否可达
    // dp[0] = 0

    const dp = Array(amount + 1).fill(-1)
    dp[0] = 0

    for(let i = 0;i <= amount;i++) {
        for(const x of coins) {
            if(i < x) continue
            if(dp[i - x] === -1) continue
            // 这里的判断就相当于决策的过程
            if(dp[i] === -1 || dp[i] > dp[i-x] + 1) dp[i] = dp[i-x] + 1
        }
    }

    return dp[amount]
};