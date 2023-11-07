function largestRectangleArea(heights: number[]): number {
    
    // 单调递增
    const s:number[] = []
    // 寻找每个元素左右侧第一个小于它的元素位置
    const l:number[] = []
    const r:number[] = []


    for(let i = 0;i < heights.length;i++) l[i] = -1, r[i] = heights.length
    for(let i = 0;i < heights.length;i++) {
        while(s.length && heights[i] <= heights[s[s.length-1]]) {
            r[s[s.length-1]] = i
            s.pop()
        }
        if(s.length) l[i] = s[s.length-1]
        s.push(i)
    }

    let ans:number = 0

    for(let i = 0;i < heights.length;i++) {
        ans = Math.max(ans, heights[i] * (r[i] - l[i] - 1))
    }

    return ans

};