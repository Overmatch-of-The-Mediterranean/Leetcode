function combinationSum4(nums: number[], target: number): number {
    // dp[j][i]表示拼凑出j所使用的前i种数字的组合数，包含重复
    // dp[j][i] = 累加dp[j][vi], i <= j，vi属于nums

    const dp = Array(target+1).fill(0)
    dp[0] = 1


    for(let j = 1;j <= target;j++) {
        for(let i = 0;i < nums.length;i++) {
            if(j < nums[i]) continue
            dp[j] += dp[j-nums[i]]
        }
    }

    return dp[target]
};