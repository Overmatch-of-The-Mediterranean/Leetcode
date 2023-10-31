function jump(nums: number[]): number {
    if (nums.length === 1) return 0
    let prev = 1, pos = nums[0], cnt = 1
    while(pos + 1 < nums.length) {
        let j = prev
        for(let i = prev + 1;i <= pos;i++) {
            if(i + nums[i] > j + nums[j]) j = i
        }

        prev = pos + 1
        pos = j + nums[j]
        cnt++
    }

    return cnt
};