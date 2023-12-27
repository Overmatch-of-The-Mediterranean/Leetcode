let flag, pre

function inorder(root: TreeNode | null){
    if(!root) return true

    // 将结果一层一层传递上去
    if(!inorder(root.left)) return false

    // 和前一个遍历过的节点进行比较
    if(pre && pre.val >= root.val) return false

    pre = root

    if(!inorder(root.right)) return false

    return true
}


function isValidBST(root: TreeNode | null): boolean {
    flag = true
    pre = null

    flag = inorder(root)

    return flag

};