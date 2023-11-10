const h = new Map<number, number>()

function count(root, sum, targetSum){
    if(!root) return 0
    
    sum += root.val
    // 当前位置和值，减去目标值，查找前面是否有剩余值，即是否有剩余值的这条路
    let cnt = h.get(sum - targetSum) ?? 0
    h.get(sum) ? h.set(sum, h.get(sum) + 1) : h.set(sum, 1)

    // 相当于一条路一条路走的
    cnt += count(root.left, sum, targetSum)
    cnt += count(root.right, sum, targetSum)
    // 这条路走完，回溯时，就减去这条路上的和值的次数
    // 回溯时，代表要走下条路，所以不能受到上条路的影响，每条路是单独的，互不影响的
    // 可以理解成一条一条的链表，这条链表找完，接着找下条链表，互不影响
    h.set(sum, h.get(sum) - 1)

    return cnt


}

function pathSum(root: TreeNode | null, targetSum: number): number {
    if(!root) return 0
    h.clear()
    h.set(0, 1)
    let sum = 0
    return count(root, sum, targetSum)
};