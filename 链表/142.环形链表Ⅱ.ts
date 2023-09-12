function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null

    let p = head
    let q = head.next

    while(p != q && q && q.next) {
        p = p.next
        q = q.next.next
    }

    if(!q || !q.next) return null

    p = head
    q = q.next
    while(p != q) {
        p = p.next
        q = q.next
    }

    return q

};
export {}