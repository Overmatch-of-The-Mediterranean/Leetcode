function maxGain(root) {
  if (!root) return 0

  const left = Math.max(maxGain(root.left), 0)
  const right = Math.max(maxGain(root.right), 0)

  const newGain = root.val + left + right
  maxResult = Math.max(maxResult, newGain)
  return Math.max(left, right) + root.val
}

let maxResult

function maxPathSum(root: TreeNode | null): number {
  maxResult = Number.MAX_VALUE * -1

  maxGain(root)

  return maxResult
}
