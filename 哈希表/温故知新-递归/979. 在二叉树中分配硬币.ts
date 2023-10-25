/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getResult(root: TreeNode | null, obj){
    obj.n = 0
    obj.m = 0

    if(!root) return 0
    obj.n = 1
    obj.m = root.val
    let ans = 0
    let obj1 = {
        n:0,
        m:0
    }
    // 得到的是root.left左右各子树的节点数与硬币书的绝对值之和
    ans += getResult(root.left, obj1)
    // 还需要再加上root.left自身的节点数与硬币书的绝对值
    ans += Math.abs(obj1.n - obj1.m)
    obj.n += obj1.n
    obj.m += obj1.m

    ans += getResult(root.right, obj1)
    ans += Math.abs(obj1.n - obj1.m)
    obj.n += obj1.n
    obj.m += obj1.m

    // 返回的是root左右各子树的节点数与硬币书的绝对值之和
    return ans

    
}

function distributeCoins(root: TreeNode | null): number {
    const obj = {
        n:0,
        m:0
    }

    return getResult(root, obj)
};