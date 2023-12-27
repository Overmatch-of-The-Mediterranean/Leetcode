let arr:TreeNode[] = []

function inorder(root: TreeNode | null) {
    if(!root) return root
    inorder(root.left)

    arr.push(root)

    inorder(root.right)
}

function buildTree(l:number, r:number) {
    if(l > r) return null
    let root:TreeNode | null = null
    const mid = Math.floor((l + r) / 2)
    root = arr[mid]
    root.left = buildTree(l, mid - 1)
    root.right = buildTree(mid + 1, r)

    return root

}

function balanceBST(root: TreeNode | null): TreeNode | null {
    arr = []
    // 先中序遍历存入数组
    inorder(root)
    // 再通过数组进行建树
    return buildTree(0, arr.length - 1)
};