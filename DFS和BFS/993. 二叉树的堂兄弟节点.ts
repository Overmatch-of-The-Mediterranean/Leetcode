// function dfs(root: TreeNode | null, k:number, parentNode: {node:TreeNode | null}) {
//     if(!root) return null
//     if(root.val === k) return 1

//     parentNode.node = root
//     let c = 0
//     c = dfs(root.left, k, parentNode)
//     if(c) return c + 1

//     parentNode.node = root
//     c = dfs(root.right, k, parentNode)
//     if(c) return c + 1 

//     return null

// }


// function isCousins(root: TreeNode | null, x: number, y: number): boolean {

//     let parent_x:{node:TreeNode | null} = {
//         node:null
//     }
//     let parent_y:{node:TreeNode | null} = {
//         node:null
//     }

//     const a = dfs(root, x, parent_x)
//     const b = dfs(root, y, parent_y)

//     return a === b && parent_x.node !== parent_y.node
// };


function bfs(root: TreeNode | null, k:number) {
    const q:Data[] = []
    q.push(new Data(root, 0, null))

    while(q.length) {
        const cur = q.shift()
        if(cur.node.val === k) return cur
        
        if(cur.node.left) q.push(new Data(cur.node.left, cur.k + 1, cur.node))
        if(cur.node.right) q.push(new Data(cur.node.right, cur.k + 1, cur.node))
    }

}

class Data {
    node:TreeNode | null
    // val:number
    k:number
    parent:TreeNode | null
    constructor(node:TreeNode | null,k:number, parent:TreeNode | null){
        this.node = node
        this.k = k
        this.parent = parent
    }
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {



    const a = bfs(root,x)
    const b = bfs(root,y)

    return a.k === b.k && a.parent !== b.parent
};