function postorderTraversal(root: TreeNode | null): number[] {
    let stack:TreeNode[] = []
    let result:number[] = []
    let current:TreeNode | null = root
    let lastVisitedNode:TreeNode | null = null
    

    while(current || stack.length > 0) {

        while(current) {
            stack.push(current)
            current = current.left
        }

        current = stack[stack.length - 1]

        if(current.right === null || current.right === lastVisitedNode) {
            result.push(current.val)
            lastVisitedNode = current
            stack.pop()
            current = null
        } else {
            current = current.right
        }

    }
    
    return result
};