function check(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false

  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}
