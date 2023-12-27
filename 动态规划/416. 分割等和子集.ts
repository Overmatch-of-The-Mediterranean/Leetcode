function canPartition(nums: number[]): boolean {

    // dp[i][j]，表示前i个数是否能组成j
    // dp[i][j] = dp[i-1][j] | dp[i-1][j-nums[i]]，不选第i个数和选第i个数
    // 将二维dp优化成一维dp[j]，
    let sum = 0
    for(const x of nums) sum += x
    if(sum % 2) return false

    const dp = Array(sum).fill(0)
    dp[0] = 1
    sum = 0
    for(const x of nums) {
        sum += x
        for(let i = sum; i >= x;i--) {
            dp[i] |= dp[i-x]
        }
    }

    return dp[sum / 2]
};