function maxSlidingWindow(nums: number[], k: number): number[] {
    const maxs:number[] = []

    // 单调队列
    const q:number[] = []

    for(let i = 0;i < nums.length;i++) {
        while(q.length && nums[q[q.length - 1]] < nums[i]) q.pop()
        q.push(i)

        if(i + 1 < k) continue
        if(i - q[0] === k) q.shift()
        maxs.push(nums[q[0]])
    }

    return maxs

};