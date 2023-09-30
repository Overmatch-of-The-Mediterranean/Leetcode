function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null
    
    // 1.找到根节点
    let pos = 0
    while(preorder[0] !== inorder[pos]) pos++

    let l_pre:number[] = []
    let l_in:number[] = []
    let r_pre:number[] = []
    let r_in:number[] = []

    // 2.分离出左子树的前，中序遍历
    for(let i = 0;i < pos;i++){
        l_pre.push(preorder[i + 1])
        l_in.push(inorder[i])
    }

    // 3.分离出右子树的前，中序遍历
    for(let i = pos + 1;i < preorder.length;i++) { 
        r_pre.push(preorder[i])
        r_in.push(inorder[i])
     }

    let root = new TreeNode(preorder[0])
    // 4.递归建立左子树
    root.left = buildTree(l_pre, l_in)
    // 5.递归建立右子树
    root.right = buildTree(r_pre, r_in)

    return root
};