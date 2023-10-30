
function check(nums:number[], k:number, limit:number){
    // 单调递增队列
    let q1:number[] = []
    // 单调递减队列
    let q2:number[] = []


    for(let i = 0;i < nums.length;i++) {
        while(q1.length && nums[i] < nums[q1[q1.length-1]]) q1.pop()
        while(q2.length && nums[i] > nums[q2[q2.length-1]]) q2.pop()

        q1.push(i)
        q2.push(i)

        if(i + 1 < k) continue
        if(i - q1[0] === k) q1.shift()
        if(i - q2[0] === k) q2.shift()
        // 这里相当于滑动窗口移动一位后，开始比较，若不符合条件，滑动窗口继续向后移动
        if(nums[q2[0]] - nums[q1[0]] <= limit) return true
    }
    
    return false
}


function bs(nums:number[], l:number, r:number, limit:number){
    if(l === r) return l
    let mid:number = Math.floor((l + r + 1) / 2)

    // 判断是否有长度为mid的子数组满足题意
    // 若有则l = mid，增大下一次的mid，即检查是否有更长的数组满足题意
    if(check(nums, mid, limit)) l = mid
    else r = mid - 1

    return bs(nums, l , r, limit)
}


// 二分加判定，以及滑动窗口思想的结合
function longestSubarray(nums: number[], limit: number): number {

    return bs(nums, 1, nums.length, limit)

};