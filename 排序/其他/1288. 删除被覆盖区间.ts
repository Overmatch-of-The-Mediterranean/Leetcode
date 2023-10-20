function removeCoveredIntervals(intervals: number[][]): number {
    // 左边从小到大，右边从大到小
    intervals.sort(function(a,b){
        if(a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

    let cnt = 0
    for(let i = 1;i < intervals.length;i++) {
        for(let j = 0;j < i;j++) {
            if(intervals[i][1] <= intervals[j][1]) {
                cnt++
                break
            }
        }
    }
    return intervals.length - cnt
};