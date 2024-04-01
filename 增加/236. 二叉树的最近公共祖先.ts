function dfs(root, p, q) {
  if (!root) return false

  let lHave = dfs(root.left, p, q)
  let rHave = dfs(root.right, p, q)

  if (
    (lHave && rHave) ||
    ((p.val === root.val || q.val === root.val) && (lHave || rHave))
  ) {
    ans = root
  }

  return lHave || rHave || p.val === root.val || q.val === root.val
}

let ans
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  dfs(root, p, q)
  return ans
}
