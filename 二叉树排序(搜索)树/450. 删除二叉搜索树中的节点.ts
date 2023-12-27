function getPre(root: TreeNode | null){

    let cur = root.left
    while(cur.right) cur = cur.right

    return cur

}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(!root) return root
    if(key < root.val){
        root.left = deleteNode(root.left, key)
    } else if(key > root.val){
        root.right = deleteNode(root.right, key)
    } else {
        // 讨论叶子节点，有一个叶子节点，有两个叶子节点的情况
        if(!root.left || !root.right) {
            let temp = root.left ? root.left : root.right
            return temp
        } else {
            let pre = getPre(root)
            root.val = pre.val

            // 赋值后，将前缀节点删除
            root.left = deleteNode(root.left,  pre.val)
        }

    }

    return root

};