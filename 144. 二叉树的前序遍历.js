//  递归
var preorderTraversal = function (root) {
  if (root === null) return []
  let arr = [];
  function DG(root, arr) {
    if (root.right) DG(root.right, arr);
    if (root.left) DG(root.left, arr);
    arr.unshift(root.val);
    return arr;
  }
  DG(root, arr);
  return arr;
}