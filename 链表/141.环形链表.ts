function hasCycle(head: ListNode | null): boolean {
    if(!head || !head.next) return false

    let p = head
    let q = head.next
    while(p != q && q && q.next) {
        p = p.next
        q = q.next.next
    }

    if(q && q.next) return true
    return false
    
};

export {}