// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//     // const s:number[] = []
//     const ret:number[] = Array(nums1.length).fill(-1)

//     for(let i = 0;i < nums1.length;i++) {
//         for(let j = 0;j < nums2.length;j++) {
//             if(nums1[i] !== nums2[j]) continue
//             for(let k = j + 1;k < nums2.length;k++) {
//                 if(nums2[k] > nums2[j]) {
//                     ret[i] = nums2[k]
//                     break
//                 } 
//             }
//             break
//         }
//     }

//     return ret
// };


function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const s:number[] = []
    const ans:number[] = []
    const h = new Map<number,number>()
    // 先求出nums2中每个元素后面的第一个大于它的值
    for(let i = 0;i < nums2.length;i++) {
        while(s.length && nums2[i] > s[s.length-1]) {
            h.set(s[s.length-1], nums2[i])
            s.pop()
        }
        s.push(nums2[i])
    }

    for(let i = 0;i < nums1.length;i++) {
        if(h.get(nums1[i]) !== undefined) {
            ans[i] = h.get(nums1[i])
        } else {
            ans[i] = -1
        }
    }
    return ans

};