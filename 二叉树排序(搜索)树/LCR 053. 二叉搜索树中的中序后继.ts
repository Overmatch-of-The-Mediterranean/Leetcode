let pre = null, ans = null
function inorder(root: TreeNode | null, p: TreeNode | null){
    if(!root) return false

    if(inorder(root.left, p)) return true

    if(pre === p) {
        ans = root
        return true
    }
    pre = root

    if(inorder(root.right, p)) return true

    return false

}

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
	pre = null
    ans = null
    inorder(root, p)
    return ans
};