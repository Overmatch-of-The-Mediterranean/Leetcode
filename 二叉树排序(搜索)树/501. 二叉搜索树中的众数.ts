let cnt = 0
let max_cnt = 0
let now:TreeNode = null
let arr: number[] = []

function inorder(root: TreeNode | null) {
    if(!root) return null

    inorder(root.left)
    
    if(now.val === root.val) {
        cnt++
    } else {
        // 因为二叉搜索树的性质，如果不等，那么之后就不会再有值和其相等的节点了
        // 所以，不用担心后续会不会遇到与之前相同的值
        now = root
        cnt = 1
    }

    if(cnt === max_cnt) {
        arr.push(root.val)
    } else if (cnt > max_cnt) {
        max_cnt = cnt
        arr = []
        arr.push(root.val)
    }
    
    

    inorder(root.right)
}

function findMode(root: TreeNode | null): number[] {
    cnt = 0
    max_cnt = 0
    arr = []
    now = root
    inorder(root)
    return arr
    
};