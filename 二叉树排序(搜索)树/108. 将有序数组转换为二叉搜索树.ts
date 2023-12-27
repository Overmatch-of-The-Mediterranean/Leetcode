function buildTree(arr: number[] ,l:number, r:number) {
    if(l > r) return null
    let root: TreeNode | null = new TreeNode()
    const mid = Math.floor((l + r) / 2)

    root.val = arr[mid]

    root.left = buildTree(arr, l, mid - 1)
    root.right = buildTree(arr, mid + 1, r)

    return root
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    
    return buildTree(nums, 0, nums.length - 1)
};