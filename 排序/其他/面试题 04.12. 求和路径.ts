function getPathSum(root: TreeNode | null, sum: number){
    if(!root) return 0
    const val = sum - root.val
    return (sum === root.val) + getPathSum(root.left, val) + getPathSum(root.right, val)
    
}

function pathSum(root: TreeNode | null, sum: number): number {
    if(!root) return 0
    const a = getPathSum(root,sum)

    return a + pathSum(root.left, sum) + pathSum(root.right, sum)
};