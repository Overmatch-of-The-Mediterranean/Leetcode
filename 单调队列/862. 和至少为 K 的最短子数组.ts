function shortestSubarray(nums: number[], k: number): number {
    let sum:number[] = [0]

    // 单调递减队列
    let q:number[] = [0]

    // 求前缀和数组
    for(let i = 0;i < nums.length;i++) sum[i + 1] = sum[i] + nums[i]

    let pos = -1
    let ans = -1
    // 每次循环，意味着从以i为结尾的数组的RBQ的序列中找到最后一个满足题意的下标值
    for(let i = 1;i < sum.length;i++) {
        while(q.length && sum[i] - sum[q[0]] >= k) {
            pos = q.shift()
        }

        if(pos !== -1 && (ans === -1 || ans > i - pos)) ans = i - pos

        while(q.length && sum[i] < sum[q[q.length-1]]) q.pop()
        q.push(i)
    }

    return ans
};