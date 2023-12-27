function preOrder(root: TreeNode | null, voyage:number[], ret:number[]){
    if(!root) return true

    // 若当前节点的值与对应voyage的值不相等，则无论怎么交换左右子树都不可能的得到预期的二叉树 先序遍历 结果。
    if(root.val !== voyage[index]) {
        ret.length = 0
        ret.push(-1)
        return false
    }

    // 若下一位时voyage的最后一个元素，则可以得到预期二叉树
    index++
    if(index === voyage.length - 1) return true

    // 前序遍历序列中，序列中根节点的下一位就是其左子树的根节点的值
    // 比较是否相同，不相同交换左右子树
    if(root.left && root.left.val !== voyage[index]) {
        let temp = root.left
        root.left = root.right
        root.right = temp

        ret.push(root.val)
        
    }

    // 判断交换过后的左右子树各自是否满足条件
    if(!preOrder(root.left, voyage, ret)) return false
    if(!preOrder(root.right, voyage, ret)) return false

    return true
}

let index = 0

function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
    index = 0
    let ret:number[] = []
    
    preOrder(root, voyage, ret)

    return ret
};