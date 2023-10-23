function search(nums: number[], target: number): boolean {
    if(nums[0] === target || nums[nums.length - 1] === target) return true

    let l = 0
    let r = nums.length - 1
    // 去除左右两端相等重复的元素，保证左端第一个元素大于右端最后一个元素
    while(nums[l] === nums[r]) l++
    while(nums[r] === nums[l]) r--

    let head = l
    let tail = r
    let mid:number
    while(head <= tail) {
        mid = Math.floor((head + tail) / 2)
        if(nums[mid] === target) return true

        // 判断单调区间是在前半段还是后半段
        // 然后根据具体那种情况，再二分区间
        if(nums[mid] <= nums[tail]){
            if(nums[mid] < target && target <= nums[tail]) head = mid + 1
            else tail = mid - 1
        } else {
            if(nums[head] <= target && target < nums[mid]) tail = mid - 1
            else head = mid + 1
        }
    }
    return false
};