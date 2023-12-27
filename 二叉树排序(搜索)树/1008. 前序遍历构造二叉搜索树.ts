function inorder(nums:number[], l:number, r:number) {
    if(l > r) return null

    let index = l + 1
    while(nums[index] < nums[l]) index++

    const root = new TreeNode(nums[l])

    root.left = inorder(nums, l + 1, index - 1)
    root.right = inorder(nums, index, r)

    return root
    
}

function bstFromPreorder(preorder: number[]): TreeNode | null {
    
    return inorder(preorder, 0, preorder.length-1)
};