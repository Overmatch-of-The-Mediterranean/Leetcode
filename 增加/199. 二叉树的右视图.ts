function getResult(root, k, arr) {
  if (!root) return root

  if (k === arr.length) arr.push(root.val)
  getResult(root.right, k + 1, arr)
  getResult(root.left, k + 1, arr)
}

function rightSideView(root: TreeNode | null): number[] {
  let arr = []

  getResult(root, 0, arr)
  return arr
}
