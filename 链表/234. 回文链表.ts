function reverse(head: ListNode) {
    let vhead = new ListNode()
    let p = head
    let q = head
    while(p) {
        q = p.next
        p.next = vhead.next
        vhead.next = p
        p = q
    }
    return vhead.next

}
function isPalindrome(head: ListNode | null): boolean {
    if(!head) return false
    
    let p = head
    let q = head
    while(q.next && q.next.next) {
        p = p.next
        q = q.next.next
    }

    p.next = reverse(p.next)
    q = p.next
    p = head
    while(q) {
        if(p.val !== q.val) return false
        p = p.next
        q = q.next 
    }

    return true
    
};