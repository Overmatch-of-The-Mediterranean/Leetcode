function dfs(l:number,r:number) {

    let arr: Array<TreeNode | null> = []
    if(l > r) {
        arr.push(null)
        return arr
    }

    for (let i = l;i <= r;i++) {
        let leftTree = dfs(l, i - 1)
        let rightTree = dfs(i + 1, r)

        for(const left of leftTree) {
            for(const right of rightTree) {
                const node = new TreeNode(i, left, right)
                arr.push(node)
            }
        }

    }

    return arr
}

function generateTrees(n: number): Array<TreeNode | null> {

    const arr = dfs(1,n)
    return arr

};