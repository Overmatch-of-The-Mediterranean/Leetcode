
function inorder(nums:number[], l:number, r:number){
    if(l > r) return true

    let index = l
    while(nums[index] < nums[r]) index++

    // [小于root的值], [大于root的值], root
    // 每次将左右子树拆分出来，再对各左右子树进行递归
    if(!inorder(nums, l, index - 1)) return false 

    if(pre >= nums[r]) return false
    pre = nums[r]

    if(!inorder(nums, index, r - 1)) return false

    return true
}

let pre = -1

function verifyTreeOrder(postorder: number[]): boolean {
    pre = -1

    return inorder(postorder, 0, postorder.length-1)
};