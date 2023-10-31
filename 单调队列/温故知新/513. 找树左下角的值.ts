function findBottomLeftValue(root: TreeNode | null): number {
    let max_k = -1
    let ans = 0

    function dfs(root:TreeNode | null, k:number){
        if(!root) return 
        if(k > max_k) {
            max_k = k
            ans = root.val
        }

        dfs(root.left, k + 1)
        dfs(root.right, k + 1)
    }

    dfs(root, 0)
    return ans
};