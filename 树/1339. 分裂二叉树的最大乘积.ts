function getSum(root: TreeNode | null){
    if(!root) return 0
    let val = root.val + getSum(root.left) + getSum(root.right)

    // 回溯时，选择最接近平均值的和值
    if(Math.abs(val - avg) < Math.abs(ans - avg)) ans = val
    return val
}

let avg, ans = 0

function maxProduct(root: TreeNode | null): number {
    let total = getSum(root)
    avg = Math.floor(total / 2)

    ans = total
    getSum(root)
    
    // 问题本质是，将和值，拆分成两个数，找乘积最大的两个数，当两个数越接近平均值，乘积就越大
    return (ans * (total - ans)) % (1e9 + 7) 
};