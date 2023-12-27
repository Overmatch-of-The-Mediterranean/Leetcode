
function bfs(nums: number[], ret:number[][], index:number, buff:number[]) {
    if(index === nums.length) {
        ret.push([...buff])
        return
    }


    for(let i = 0;i < nums.length;i++) {
        // 避免结果数组中，放入重复的数组
        if(visited[i] || (i > 0 && nums[i] === nums[i-1] && !visited[i-1])) continue

        visited[i] = true
        buff.push(nums[i])
        bfs(nums, ret, index + 1, buff)
        visited[i] = false
        buff.pop()
    }


}
let visited:boolean[] = []

function permuteUnique(nums: number[]): number[][] {
    nums.sort((a,b) => a-b)

    const ret:number[][] = []
    const buff:number[] = []
    visited = new Array(nums.length).fill(false)

    bfs(nums, ret, 0, buff)

    return ret

};