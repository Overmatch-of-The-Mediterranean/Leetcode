function findMaxForm(strs: string[], m: number, n: number): number {
    // dp[m][n]，表示容量为m个0和n个1的情况下，最大子集的长度。0/1背包问题
    const dp = Array.from(Array(m+1),() => Array(n+1).fill(0))
    

    for(const str of strs) {
        let cnt0 = 0
        let cnt1 = 0
        for(const x of str) {
            if(x === '0') cnt0++
            else cnt1++
        }

        for(let i = m;i >= cnt0;i--) {
            for(let j = n;j >= cnt1;j--) {
                dp[i][j] = Math.max(dp[i-cnt0][j-cnt1] + 1, dp[i][j])
            }
        }
    }

    return dp[m][n]
};