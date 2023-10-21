
function getResult(nums:number[], k:number, buff:number[], result:number[][]) {
    let buffCopy = buff.slice(0)

    // 这里需要push进去一个副本buffCopy，如果push进去buff，下面的操作会影响之前已经收集的值
    if(buff.length > 1) result.push(buffCopy)

    buff.push(0)
    const map = new Map()
    for(let i = k;i < nums.length;i++){
        if(map.get(nums[i])) continue
        if(buff.length === 1 || buff[buff.length-2] <= nums[i]){
            buff[buff.length-1] = nums[i]
            map.set(nums[i],1)
            getResult(nums, i+1, [...buff], result)
        }
    }
}

function findSubsequences(nums: number[]): number[][] {
    const result:number[][] = []

    getResult(nums, 0, [], result)

    return result 
};