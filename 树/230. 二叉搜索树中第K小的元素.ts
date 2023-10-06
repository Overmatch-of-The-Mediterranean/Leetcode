// 方法一：中序遍历
function in_order(root: TreeNode | null, arr: number[]) {
    if (root === null) return

    in_order(root.left, arr)
    arr.push(root.val)
    in_order(root.right, arr)
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const arr:number[] = []

    in_order(root, arr)

    return arr[k - 1]
};


// 方法二
function getCount(root: TreeNode | null){
    if(root === null) return 0

    return getCount(root.left) + getCount(root.right) + 1
}

function kthSmallest(root: TreeNode | null, k: number): number {

    const count_l = getCount(root.left)

    if(count_l >= k) return kthSmallest(root.left, k)
    if(count_l + 1 === k) return root.val
    return kthSmallest(root.right, k - count_l - 1)
};