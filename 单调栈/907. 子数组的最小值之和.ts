function sumSubarrayMins(arr: number[]): number {
    // 单调递增
    const s:number[] = []

    let ans = 0
    const sum:number[] = [0]
    const mod = 1e9 + 7

    // 将问题先转化为RMQ(x,y)所得出来的序列之和，再转化为固定末尾的RMQ问题所得出来的序列之和 
    for(let i = 0;i < arr.length;i++) {
        // 找到第一个比arr[i]小的值
        while(s.length && arr[i] <= arr[s[s.length-1]]) s.pop()
        const index = s.length ? s[s.length-1] : -1
        s.push(i)
        // 每一个固定末尾得到得RMQ之和 = 当前元素所贡献的次数 + 单调栈中比arr[i]小的元素一起贡献的次数
        // sum[s.length-1] 记录的是单调栈中比arr[i]小的元素一起贡献的次数
        sum[s.length] = (sum[s.length-1] + arr[i] * (i - index)) % mod
        ans += sum[s.length]
        ans %= mod
    }

    return ans
};