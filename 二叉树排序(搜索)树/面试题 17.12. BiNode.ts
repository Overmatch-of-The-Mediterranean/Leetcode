let head = null, pre = null

function inorder(root: TreeNode | null) {
    if(!root) return root

    inorder(root.left)

    if(!pre) head = root
    else pre.right = root

    root.left = null
    pre = root

    inorder(root.right)


}
function convertBiNode(root: TreeNode | null): TreeNode | null {
    head = null
    pre = null

    inorder(root)

    return head
};