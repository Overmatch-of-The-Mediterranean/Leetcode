function flatten(head: Node | null): Node | null {
    if(!head) return null
    let p = head
    let q = p
    while(p) {
        if(p.child) {
            let k = flatten(p.child)
            p.child = null
            q = k
            while(q.next) q = q.next
            q.next = p.next
            if(p.next)  p.next.prev = q
            p.next = k
            k.prev = p
        }
        p = p.next
    }
    return head
};