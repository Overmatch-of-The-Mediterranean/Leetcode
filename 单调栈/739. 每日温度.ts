function dailyTemperatures(temperatures: number[]): number[] {
    const s:number[] = []
    const ret:number[] = Array(temperatures.length).fill(0)
    for(let i = 0;i < temperatures.length;i++) {
        while(s.length && temperatures[i] > temperatures[s[s.length-1]]) {
            ret[s[s.length-1]] = i - s[s.length-1]
            s.pop()
        }
        s.push(i)
    }

    return ret
};