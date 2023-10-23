
function binarySearch (sumr:number[], target:number){
    let head = 0
    let tail = sumr.length - 1
    let mid:number

    while(head <= tail) {
        mid = Math.floor((head + tail) / 2)
        if(sumr[mid] === target) return mid
        else if(sumr[mid] < target) head = mid + 1
        else tail = mid - 1
    }

    return -1
}

function minOperations(nums: number[], x: number): number {
    // 两个前缀和数组，第一个从左往右累加，第二个从右往左累加
    const suml:number[] = Array(nums.length + 1).fill(0)
    const sumr:number[] = Array(nums.length + 1).fill(0)
    for(let i = 0;i < nums.length;i++) {
        suml[i+1] = suml[i] + nums[i]
    }

    for(let i = nums.length - 1;i >= 0;i--) {
        sumr[nums.length - i] = sumr[nums.length - i - 1] + nums[i]
    }

    let ans = -1

    for(let i = 0;i < suml.length;i++) {
        let j = binarySearch(sumr, x - suml[i])
        if(j === -1) continue
        if(i + j > nums.length) return -1
        if(ans === -1 || ans > i + j) ans = i + j
    }

    return ans
};