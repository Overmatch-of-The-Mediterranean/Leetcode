class NodeToNum {
    node:TreeNode | null
    index: number
    constructor(node: TreeNode | null, index: number){
        this.node = node
        this.index = index
    }
}


function widthOfBinaryTree(root: TreeNode | null): number {
    // 定义队列，并推入根节点
    const queue: NodeToNum[] = []
    queue.push(new NodeToNum(root, 0))
    let maxWidth = 0

    // 每次while循环都代表处理完了一行
    while(queue.length > 0){
        // 要处理的这一行的节点数量
        const length = queue.length
        // 每行最左边的节点的编号
        let l = queue[0].index
        // 每行最右边的节点的编号
        let r = queue[0].index

        // 将这一行所有节点出队，并将对应的子节点入队，即，向队列中推入下一行
        for(let i = 0; i < length; i++){
            const nodeToNum = queue.shift()
            const node = nodeToNum.node
            const index = nodeToNum.index
            // 每次出队元素，更新r
            r = index

            // index - l, 用来缩小编号范围，进行优化，解决编号溢出问题
            if(node.left) queue.push(new NodeToNum(node.left, 2 * (index - l)))
            if(node.right) queue.push(new NodeToNum(node.right, 2 * (index - l) + 1))

        }
        maxWidth = Math.max(maxWidth, r - l + 1)
    }

    return maxWidth

};