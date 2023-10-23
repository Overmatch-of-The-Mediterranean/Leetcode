function binarySearch(nums:number[],index:number[],head:number,target:number){
    let tail = index.length - 1
    let mid:number
    while(head <= tail) {
        mid = Math.floor((head + tail) / 2)
        if(nums[index[mid]] === target) return index[mid]
        else if(nums[index[mid]] < target) head = mid + 1
        else tail = mid - 1
    }
    // 没有找到
    return -1
}

function twoSum(nums: number[], target: number): number[] {
    // 使用二分前先排序，不对nums排序，对其对应的索引数组进行排序
    let index:number[] = []
    let result:number[] = []
    for(let i = 0;i < nums.length;i++) {
        index[i] = i
    }
    index.sort((a,b) => nums[a]- nums[b])
    for(let i = 0;i < index.length;i++) {
        result[0] = index[i]
        let j = binarySearch(nums, index, i + 1, target - nums[index[i]])
        if(j === -1) continue
        result[1] = j
        result.sort((a,b) => a - b)
        return result
    }
};