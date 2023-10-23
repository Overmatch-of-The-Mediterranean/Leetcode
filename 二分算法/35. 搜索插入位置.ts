function searchInsert(nums: number[], target: number): number {
    // 相当于找到第一位大于等于target的位置，典型0/1二分模板
    
    let head = 0
    let tail = nums.length - 1
    let mid:number
    while(head < tail) {
        mid = Math.floor((head + tail) / 2)
        if(nums[mid] < target) head = mid + 1
        else tail = mid
    }
    if(nums[head]!==target && nums[head] < target) return nums.length
    return head
};