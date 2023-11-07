function find132pattern(nums: number[]): boolean {
    
    const s:number[] = []

    // 统计每个元素左侧的最小值
    const l:number[] = [Number.MAX_VALUE]

    for(let i = 1;i < nums.length;i++) {
        l[i] = Math.min(l[i-1],nums[i-1])
    }

    for(let i = nums.length - 1;i >= 0;i--) {
        let val = nums[i]
        // 若此次元素找到小于它的最大值，但却不满足132模式
        // 因为下一次元素的l[i]只会不小于上一次的，所以下一次元素需要突破上一次元素的第一个比它大的元素
        // 所以上一次循环所弹出来的元素就没有比较的意义了，直接和比上一次元素第一个大的元素进行比较就可以
        while(s.length && nums[i] > s[s.length-1]) val = s.pop()
        s.push(nums[i])
        if(l[i] < nums[i] && val < nums[i] && l[i] < val) return true
    }

    return false


};