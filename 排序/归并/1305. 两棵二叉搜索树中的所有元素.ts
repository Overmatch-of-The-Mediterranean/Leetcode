function inOrder(root: TreeNode | null, arr:TreeNode[]) {
    if(!root) return null

    inOrder(root.left, arr)
    arr.push(root)
    inOrder(root.right, arr)

}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    
    const arr: number[] = []
    const r1: TreeNode[] = []
    const r2: TreeNode[] = []
    inOrder(root1,r1)
    inOrder(root2,r2)
    let i = 0
    let j = 0
    
    while(i < r1.length || j < r2.length){
        if(j >= r2.length || (i < r1.length && r1[i].val < r2[j].val)){
            arr.push(r1[i++].val)
        } else {
            arr.push(r2[j++].val)
        }
    }

    return arr


};