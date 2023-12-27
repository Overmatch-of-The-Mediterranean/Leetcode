

function maxProduct(nums: number[]): number {
    // dp[n]代表：以第n项作为结尾的，乘积最大的非空连续子数组的乘积值
    // 当前值与前一项的最大乘积值相乘 vs 当前值
    // dp[n] = max(dp[n-1] * nums[n], nums[n])
    let ans = Number.MAX_VALUE * (-1)
    let min_val = 1
    let max_val = 1

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] < 0) {
            const temp = min_val
            min_val = max_val
            max_val = temp
        }

        max_val = Math.max(max_val * nums[i], nums[i])
        min_val = Math.min(min_val * nums[i], nums[i])

        ans = Math.max(max_val, ans)

    }

    return ans

};