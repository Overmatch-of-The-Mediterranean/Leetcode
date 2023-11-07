function trap(height: number[]): number {
    const s:number[] = []

    let ans:number = 0
    for(let i = 0;i < height.length;i++) {
        while(s.length && height[i] > height[s[s.length-1]]) {
            const now = s.pop()
            if(!s.length) continue
            const a = height[i] - height[now]
            const b = height[s[s.length-1]] - height[now]
            ans += (i - s[s.length-1] - 1) * Math.min(a, b)
        }
        s.push(i)
    }

    return ans

};
