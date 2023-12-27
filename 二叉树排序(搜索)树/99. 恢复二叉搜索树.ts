function inorder(root: TreeNode | null) {
    if(!root) return root

    inorder(root.left)

    if(pre && pre.val > root.val) {
        if(!p) p = pre
        q = root
    }
    pre = root

    inorder(root.right)
}

let pre = null
let p = null
let q = null

function recoverTree(root: TreeNode | null): void {
    pre = null
    p = null
    q = null
    inorder(root)

    let temp = p.val
    p.val = q.val
    q.val = temp
};