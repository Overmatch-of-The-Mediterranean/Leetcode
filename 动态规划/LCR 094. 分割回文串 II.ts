function is_palindrome(s,i,j) {
    while(i <= j) {
        if(s[i] !== s[j]) return false
        else i++,j--
    }

    return true
}



function minCut(s: string): number {
    const n = s.length
    // dp[n]表示以n位置为结尾的字符串的最少分割成的字符串的个数
    const dp = [0]
    
    for(let i = 1;i <= n;i++) {
        dp[i] = i
        // j需要从0开始，不能从1开始，因为需要从第0位开始判断
        for(let j = 0; j <= i-1;j++) {
            // dp[j]，指s中的0~j-1位，所以接下来要判断j~i-1是否是回文串
            if(is_palindrome(s, j , i - 1)) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    console.log('dp',dp)
    return dp[n] - 1
};