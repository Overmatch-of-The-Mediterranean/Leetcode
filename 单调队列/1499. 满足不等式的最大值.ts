function findMaxValueOfEquation(points: number[][], k: number): number {
    // yi + yj + |xi - xj| ---> (xj + yj) + (yi - xi)
    // k值固定，相当于滑动窗口，求其中的最大值，单调队列

    let q:number[][] = []
    let ans:number = Number.MAX_VALUE * -1

    for(const x of points) {
        while(q.length && Math.abs(x[0] - q[0][0]) > k) q.shift()
        // 每次从递增栈中选择最大的y-x
        if(q.length) {
            ans = Math.max(ans, x[0] + x[1] + q[0][1] - q[0][0])
        }
        // 因为 ans = (xj + yj) + (yi - xi)
        // xj, yj的值就是当前遍历的元素的值，这时yi-xi就要尽可能大
        // 所以，单调栈中比较的大小就是每个元素y-x的大小
        while(q.length && x[1] - x[0] > q[q.length-1][1] - q[q.length-1][0]) q.pop()

        q.push(x)
    }
    return ans
};