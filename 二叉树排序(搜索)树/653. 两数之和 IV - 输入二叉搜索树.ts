function inorder(root: TreeNode | null, ret:number[]) {
    if(!root) return root

    inorder(root.left, ret)

    ret.push(root.val)

    inorder(root.right, ret)
}

function findTarget(root: TreeNode | null, k: number): boolean {
    let ret:number[] = []
    inorder(root, ret)
    let p = 0
    let q = ret.length - 1
    while(p <= q) {
        if(ret[p] + ret[q] === k) break
        if(ret[p] + ret[q] > k) q--
        else p++
    }

    return p < q

};