function swap(arr:number[], i:number, j:number){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function reverse(arr:number[]){
    for(let i = 0, j = arr.length - 1;i < j;i++, j--) {
        swap(arr, i, j)       
    }
}

function _zigzagLevelOrder(root: TreeNode | null, k:number, arr:number[][]){
    if(root == null) return
    if(k === arr.length) arr.push([])
    arr[k].push(root.val)
    _zigzagLevelOrder(root.left, k + 1, arr)
    _zigzagLevelOrder(root.right, k + 1, arr)
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const arr:number[][] = []
    _zigzagLevelOrder(root, 0 ,arr)

    for(let i = 1;i < arr.length;i+=2) {
        reverse(arr[i])
    }

    return arr
};