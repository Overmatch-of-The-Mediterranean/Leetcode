function nextGreaterElements(nums: number[]): number[] {
    
    const ret:number[] = Array(nums.length).fill(-1)
    const s:number[] = []


    for(let i = 0;i < nums.length;i++) {
        while(s.length && nums[i] > nums[s[s.length-1]]) {
            ret[s[s.length-1]] = nums[i]
            s.pop()
        }
        s.push(i)
    }
    
    for(let i = 0;i < nums.length;i++) {
        while(s.length && nums[i] > nums[s[s.length-1]]) {
            ret[s[s.length-1]] = nums[i]
            s.pop()
        }
        s.push(i)
    }

    return ret
    
};