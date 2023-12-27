let pre

function inorder(root, p){
    if(!root) return root
    let node = null

    // 讲找到的后继节点一层一层传上去
    if(node = inorder(root.left, p)) return node

    // 每次拿上次遍历过的节点与当前节点比较，若相等，则当前节点就是其后继节点
    if(pre === p) return root
    pre = root

    if(node = inorder(root.right, p)) return node

    return null
}

var inorderSuccessor = function(root, p) {
    pre = null

    return inorder(root, p) 

};