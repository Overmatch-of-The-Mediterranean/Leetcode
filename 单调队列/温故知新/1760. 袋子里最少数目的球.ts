
// 是否能将每堆球的数量分成不超过x
function f(nums:number[],x:number, maxOperation:number) {
    let cnt = 0
    for(let i = 0;i < nums.length;i++) {
        cnt += Math.ceil(nums[i] / x) - 1
    }
    
    return cnt <= maxOperation
}

// 0/1 二分模型
function bs(nums:number[], l:number, r:number, maxOperation:number) {
    if(l === r) return l
    
    let mid = Math.floor((l + r) / 2)

    if(f(nums, mid, maxOperation)) r = mid
    else l = mid + 1
    console.log(l,r)
    return bs(nums, l, r, maxOperation)

}

function minimumSize(nums: number[], maxOperations: number): number {
    let l = 1
    let r = 0
    
    for(let i = 0;i < nums.length;i++) r = Math.max(r,nums[i])
    return bs(nums, l , r, maxOperations)
};