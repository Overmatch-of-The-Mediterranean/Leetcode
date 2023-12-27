function subsets(nums: number[]): number[][] {
    
    const n = nums.length

    const ret = []
    const mark = new Set()
    // 2^0 = 0, 2^1 = 1, 2^2 = 2 .....
    for(let i = 0, j = 1;i < n;i++, j <<= 1) mark[j] = i
    
    for(let i = 0;i < (1 << n);i++) {
        const arr = []

        // val & (-val)的意思是取val二进制形式的最后一位1
        let val = i
        // 精准找出val中的1，并将每个1对应位置的数字放入arr中
        while(val) {
            arr.push(nums[mark[val & (-val)]])
            val &= (val - 1)
        }

        ret.push(arr)
    }


    return ret
};