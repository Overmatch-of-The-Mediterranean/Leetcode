 function isMatch(A: TreeNode | null, B: TreeNode | null):boolean {
     if(B === null) return true
     if(A === null) return false

     if(A.val !== B.val) return false
     return isMatch(A.left, B.left) && isMatch(A.right, B.right)
 }

//  寻找到与B的根节点相同的节点，然后通过isMatch一个节点一个节点比较
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if(A === null) return false
    if(B === null) return false

    if(A.val === B.val && isMatch(A, B)) return true

    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};