function swap(arr,i:number,j:number){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function _levelOrderBottom(root: TreeNode | null,k:number,arr:number[][]){
    if(root == null) return
    if(k === arr.length) arr.push([])
    arr[k].push(root.val)
    _levelOrderBottom(root.left,k + 1, arr)
    _levelOrderBottom(root.right, k + 1,arr)
}

function levelOrderBottom(root: TreeNode | null): number[][] {
    let arr:number[][] = []
    _levelOrderBottom(root, 0, arr)

    for(let i = 0,j = arr.length - 1;i < j;i++, j--) { 
        swap(arr,i,j)
     }

     return arr
};