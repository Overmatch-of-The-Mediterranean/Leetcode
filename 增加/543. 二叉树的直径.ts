function getHeight(root) {
  if (!root) return 0
  let left = getHeight(root.left)
  let right = getHeight(root.right)

  maxd = Math.max(left + right, maxd)
  return Math.max(left, right) + 1
}

let maxd = 0

function diameterOfBinaryTree(root: TreeNode | null): number {
  maxd = 0
  getHeight(root)

  return maxd
}
