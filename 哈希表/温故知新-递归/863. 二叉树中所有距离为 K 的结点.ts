// c代表该节点当前在第几层，k是要找的层数
function dfs(root: TreeNode | null, c:number, k:number, ret:number[]){
    if(!root) return null
    if(k < 0) return
    if(c === k) {
        ret.push(root.val)
        return
    }

    dfs(root.left, c + 1, k, ret)
    dfs(root.right, c + 1, k, ret)

}

// 先getResult递归找到目标节点，然后通过dfs再递归查找结果数组中的节点
function getResult(root: TreeNode | null, target: TreeNode | null, obj:{ k:number }, ret:number[]){
    if(!root) return null
    if(root === target) {
        dfs(root, 0, obj.k, ret)
        return target
    }
    if(getResult(root.left, target, obj, ret)) {
        obj.k -= 1
        if(obj.k === 0) ret.push(root.val)
        dfs(root.right, 0, obj.k - 1, ret)
        return target
    } else if(getResult(root.right, target, obj, ret)) {
        obj.k -= 1
        // 回溯到这时，k应该减一，因为向上回溯一层后，需要判断回溯到的这一层的节点(即，root节点)是否是要找的节点
        // 如果k为0，说明这个分支判断条件中的root.left的父节点(root节点)是要找的节点之一
        if(obj.k === 0) ret.push(root.val)
        dfs(root.left, 0, obj.k - 1, ret)

        // 返回target的目的：是为了向上回溯的时候，父节点的if ，else if分支语句可以知道，自己左右那个子树中可以找到target
        // 从而对父节点的另一颗子树进行搜索
        return target
    }

    return null
    

}

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const ret:number[] = []
    const obj = { k }
    getResult(root, target, obj ,ret)
    return ret
};