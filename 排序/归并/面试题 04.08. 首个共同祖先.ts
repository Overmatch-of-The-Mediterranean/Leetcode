var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(root === p || root === q) return root

    let l = lowestCommonAncestor(root.left, p, q)
    let r = lowestCommonAncestor(root.right,p, q)

    if(l && r) return root
    if(l) return l
    return r
};