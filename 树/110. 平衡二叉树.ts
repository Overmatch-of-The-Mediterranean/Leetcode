function getHeight(root:TreeNode | null){
    if(root == null) return 0
    let left = getHeight(root.left)
    let right = getHeight(root.right)

    // 判断左右子树中是否有不平衡
    if(left < 0 || right < 0) return -2

    // 左右子树都平衡，计算左右子树的高度差
    if(Math.abs(left - right) > 1) return -2

    return Math.max(left,right) + 1
}

function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root) >=0 
};