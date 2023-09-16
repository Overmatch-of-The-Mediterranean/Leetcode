function leastInterval(tasks: string[], n: number): number {
    // 公式：最短时间 = (n-1) * (k+1) + m
    // n是所有任务中，某种任务出现的最多数量
    // k是n
    // m是出现n次的任务种类数量

    let count:number[] = Array(26).fill(0)
    
    // 统计每种任务的数量
    for(let i = 0;i < tasks.length;i++) {
        const index:number = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)
        count[index]++
    }
    
    // 对每种任务的数量大小进行排序
    count.sort((a,b)=>a-b)

    let m = 0
    // 统计m,m是出现n次的任务种类数量
    for(let i = 25;i>=0 && count[i] === count[25];i--,m++);
    
    // 实际上在求任务数与格子数中的最大值
    return Math.max(tasks.length, (count[25] - 1) * (n + 1) + m) 

};