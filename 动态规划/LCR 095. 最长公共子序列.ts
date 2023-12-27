function longestCommonSubsequence(text1: string, text2: string): number {
    const n = text1.length
    const m = text2.length
    // dp[i][j]表示长度为i和长度为j的字符串的最长公共子序列的长度
    const dp = Array.from(Array(n+1),() => new Array(m+1).fill(0))

    // 如果i和j位的字符不相等，dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
    // 如果i和j位的字符相等，则dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
    for(let i = 1;i <= n;i++) {
        for(let j = 1;j <= m;j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            if(text1[i-1] === text2[j-1]) dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
        }
    }

    return dp[n][m]

};