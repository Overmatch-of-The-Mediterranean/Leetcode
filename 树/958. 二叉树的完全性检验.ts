function nodeCnt(root: TreeNode | null) {
    if(!root) return 0
    return nodeCnt(root.left) + nodeCnt(root.right) + 1
}

// n代表子树的节点数目，m代表倒数第二层的节点数量
function judge(root, n, m) {
    if(!root) return n === 0
    
    if(n === 1) return !root.left && !root.right

    // k是最后一层之前的所有节点的总数
    let k = 2 * m - 1
    // l是左子树最后一层的节点数
    let l = Math.min(m, n - k)
    // r是右子树最后一层的节点数
    let r = n - k - l

    // 递归判断左右两子树是不是完全二叉树
    return judge(root.left, (k - 1) / 2 + l, m / 2) && judge(root.right, (k - 1) / 2 + r, m / 2)

}

function isCompleteTree(root: TreeNode | null): boolean {

    const n = nodeCnt(root)


    let m = 1, cnt = 1
    // 计算出倒数第二层的节点数m
    while(cnt + 2 * m <= n) {
        cnt += 2 * m
        m = 2 * m
    }

    return judge(root, n, m)
};