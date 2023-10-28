function dfs(index:number, arr:number[], matchsticks:number[]){
    if(index === -1) return true

    // 这层循环+dfs的意义在于遍历所有火柴能被放的位置,找到每根火柴在正确桶中的那种情况
    for(let i = 0;i < 4;i++) {
        if(arr[i] < matchsticks[index]) continue
        // arr[i] >= matchsticks[index] + matchsticks[0],要考虑到剩下的容量要能放下最小的火柴,否则就无法填满桶,也就无法组成正方形
        if(arr[i] === matchsticks[index] || arr[i] >= matchsticks[index] + matchsticks[0]) {
            arr[i] -= matchsticks[index]
            if(dfs(index - 1, arr, matchsticks)) return true
            // 如果matchsticks[index]放入第i个桶中不合适，会导致无法拼成正方形
            // 所以这时需要将matchsticks[index]换个桶放，将桶还原，进入下次循环尝试
            arr[i] += matchsticks[index]
        }
    }
    return false



}

function makesquare(matchsticks: number[]): boolean {
    let sum:number = 0
    for(const item of matchsticks) sum += item
    if(sum % 4 !==0) return false
    const arr = Array(4).fill(sum / 4)
    matchsticks.sort((a,b) => a-b)
    return dfs(matchsticks.length - 1, arr, matchsticks)
};