
function mergeTwoSort(sum:number[], l1:number, r1:number,l2:number,r2:number, lower:number, upper:number){
    let ans = 0
    let k1 = l1
    let k2 = l1
    for(let j = l2;j <= r2;j++) {

        // a <=sum[i] <= b
        let a = sum[j] - upper
        let b = sum[j] - lower
        // 找到a
        while(k1 <= r1 && sum[k1] < a) k1++
        // 找到大于b的第一个值
        while(k2 <= r1 && sum[k2] <= b) k2++
        ans += (k2 - k1)
    }
    return ans
}

function mergeSort(sum:number[], l:number, r:number, lower:number, upper:number){
    if(l >= r) return 0

    let temp:number[] = []
    let ans = 0
    const mid = Math.floor((l + r) / 2)

    ans += mergeSort(sum, l, mid, lower, upper)
    ans += mergeSort(sum, mid + 1, r, lower, upper)
    ans += mergeTwoSort(sum,l, mid, mid + 1, r, lower, upper)

    let p1 = l, p2 = mid + 1
    while(p1 <= mid || p2 <= r) {
        if(p2 > r || (p1 <= mid && sum[p1] <= sum[p2])){
            temp.push(sum[p1++]) 
        } else {
            temp.push(sum[p2++])
        }
    }

    for(let i = l;i <= r;i++) sum[i] = temp[i-l]

    return ans
}

function countRangeSum(nums: number[], lower: number, upper: number): number {
    
    // 前缀和数组
    const sum:number[] = [0]
    for(let i = 0;i < nums.length;i++) {
        sum[i+1] = sum[i] + nums[i]
    }

    return mergeSort(sum,0, sum.length - 1, lower, upper)

};