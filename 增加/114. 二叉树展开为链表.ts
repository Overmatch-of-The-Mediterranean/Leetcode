function preorder(root, arr) {
  if (!root) return

  arr.push(root)
  preorder(root.left, arr)
  preorder(root.right, arr)
}

function flatten(root: TreeNode | null): void {
  let arr = []
  preorder(root, arr)

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i]
    let pre = arr[i - 1]
    pre.right = cur
    pre.left = null
  }
}
