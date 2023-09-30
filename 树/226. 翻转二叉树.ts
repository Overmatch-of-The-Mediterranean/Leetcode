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

function swap(root:TreeNode){
    if(root == null) return
    let temp = root.left
    root.left = root.right
    root.right = temp
}

function _invertTree(root: TreeNode | null): TreeNode | null{
    if(root == null) return null
    swap(root)
    invertTree(root.left)
    invertTree(root.right)
}

function invertTree(root: TreeNode | null): TreeNode | null {
    _invertTree(root)
    return root
};