// i表示从nums1的第几位开始查找，j表示从nums2的第几位开始查找，查找第k大的数字
// 此题二分的是问题规模
function findK(nums1: number[], nums2: number[], i:number, j:number, k:number) {

    if(nums1.length === i) return nums2[j + k - 1]
    if(nums2.length === j) return nums1[i + k - 1]
    if(k === 1) return nums1[i] < nums2[j] ? nums1[i] : nums2[j]

    let a = Math.min(Math.floor(k / 2), nums1.length - i)
    let b = Math.min(k - a, nums2.length - j)
    a = k - b

    if(nums1[i + a - 1] <= nums2[j + b - 1]) return findK(nums1, nums2, i + a, j, k - a)
    else return findK(nums1, nums2, i, j + b, k - b)


}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let n1 = nums1.length
    let n2 = nums2.length
    let mid = Math.floor((n1 + n2 + 1) / 2)

    // 查找第mid大的元素，查找中位数可以看作，查找第k大元素的一种特殊情况
    let a = findK(nums1, nums2, 0, 0, mid)
    if((n1 + n2) % 2 === 1) return a

    let b = findK(nums1, nums2 ,0 ,0, mid + 1)
    return (a + b) / 2
    
};