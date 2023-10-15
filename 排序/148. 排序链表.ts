function sortList(head: ListNode | null): ListNode | null {
    if (!head) return head

    let p = head
    let q:ListNode | null = null

    let h1: ListNode | null = null
    let h2: ListNode | null = null

    let l = head.val
    let r = head.val

    while(p) {
        l = Math.min(p.val, l)
        r = Math.max(p.val, r)
        p = p.next
    }

    if(r === l) return head

    let mid = (l + r) / 2
    p = head
    while(p){
        q = p.next
        if(p.val <= mid){
            p.next = h1
            h1 = p
        } else {
            p.next = h2
            h2 = p
        }
        p = q
    }

    h1 = sortList(h1)
    h2 = sortList(h2)
    p = h1
    while(p.next){
        p = p.next
    }

    p.next = h2
    
    return h1

};