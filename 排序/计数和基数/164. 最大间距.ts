function maximumGap(nums: number[]): number {
    if(nums.length < 2) return 0

    // 基数排序
    const cnt = Array(65536).fill(0)
    const temp:number[] = [] 
    // 计数,看作65536进制的数字
    for(let i = 0; i < nums.length;i++) {
        cnt[nums[i] % 65536] += 1
    }

    // 求前缀和
    for(let i = 1;i < 65536;i++) {
        cnt[i] = cnt[i] + cnt[i-1]
    }

    // 归位
    for(let i = nums.length - 1;i >= 0;i--){
        temp[--cnt[nums[i] % 65536]] = nums[i]
    }

    // 重置数组
    for(let i = 0;i < 65536;i++) {
        cnt[i] = 0
    }

    for(let i = 0;i < nums.length;i++) {
        cnt[Math.floor(temp[i] / 65536)] += 1
    }

    for(let i = 1;i < 65536;i++) {
        cnt[i] = cnt[i] + cnt[i-1]
    }

    for(let i = nums.length-1; i >= 0;i--) {
        nums[--cnt[Math.floor(temp[i] / 65536)]] = temp[i]
    }

    let ans = 0
    for(let i = 1;i < nums.length;i++) {
        ans = Math.max(ans,nums[i] - nums[i-1])
    }
    return ans
};