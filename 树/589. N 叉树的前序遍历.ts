/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function _preorder(root:Node | null, arr:number[]){
    if(root == null) return
    arr.push(root.val)
    for(const node of root.children){
        _preorder(node, arr)
    }
}

function preorder(root: Node | null): number[] {
    const arr:number[] = []
    _preorder(root,arr)
    return arr
};