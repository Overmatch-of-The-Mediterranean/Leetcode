function judge(head: ListNode | null, root: TreeNode | null){
    if(!head) return true
    if(!root) return false
    if(head.val !== root.val) return false

    return judge(head.next, root.left) || judge(head.next, root.right)
    
    
}

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    if(!root) return false

    if(head.val === root.val && judge(head, root)) return true

    return isSubPath(head, root.left) || isSubPath(head, root.right)
    

};