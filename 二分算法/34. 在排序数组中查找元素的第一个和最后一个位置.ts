function binarySearch(nums:number[],target:number){
    let head = 0
    let tail = nums.length - 1
    let mid:number
    while(tail - head > 3) {
        mid = Math.floor((head + tail) / 2)
        if(nums[mid] < target) head = mid + 1
        else tail = mid
    }
    for(let i = head;i <= tail;i++) {
        if(nums[i] >= target) return i
    }
    return nums.length
}

function searchRange(nums: number[], target: number): number[] {
    // 0/1二分模板
    // 开始位置，<=target的第一个位置 (0/1)
    // 结束位置，<target的第一个位置 - 1 (0/1)
    let result:number[] = []

    result[0] = binarySearch(nums, target)
    
    let j = binarySearch(nums,target + 1)

    if(nums[j - 1] !== target) return [-1,-1]
    result[1] = j - 1
    return result
};