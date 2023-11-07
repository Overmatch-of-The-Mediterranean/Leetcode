function maxSumMinProduct(nums: number[]): number {
    const s:number[] = []
    const l:number[] = []
    const r:number[] = []

    for(let i = 0;i < nums.length;i++) l[i] = -1, r[i] = nums.length

    for(let i = 0;i < nums.length;i++) {
        while(s.length && nums[i] <= nums[s[s.length-1]]){
            r[s[s.length-1]] = i
            s.pop()
        }
        if(s.length) l[i] = s[s.length-1]
        s.push(i)
    }

    let ans:number = 0
    let sum:number[] = [0]
    for(let i = 0;i < nums.length;i++) sum[i+1] = (sum[i] + nums[i]) % (1e9 + 7)

    for(let i = 0;i < nums.length;i++) {
        ans = Math.max(ans, nums[i] * ((sum[r[i]] - sum[l[i] + 1]))) % (1e9 + 7)
    }

    return ans % (1e9 + 7)

}