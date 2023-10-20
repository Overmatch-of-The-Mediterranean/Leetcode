function merge(intervals: number[][]): number[][] {
    const arr:number[][] = []
    for(let i = 0;i < intervals.length;i++) {
        const temp = intervals[i]
        arr.push([temp[0],1])
        arr.push([temp[1],-1])
    }

    arr.sort(function(a,b){
        if(a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })


    let prev = -1
    let cnt = 0
    const result:number[][] = []
    for(let i = 0;i < arr.length; i++){
        if(prev === -1) prev = arr[i][0]
        cnt += arr[i][1]
        if(cnt === 0) {
            result.push([prev,arr[i][0]])
            prev = -1
        }
    }
    return result
};