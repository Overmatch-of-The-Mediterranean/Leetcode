function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let vhead = new ListNode(0,head)
    let p = vhead
    let q = head
    while(n--){
        q = q.next
    }

    while(q) {
        p = p.next
        q = q.next
    }

    p.next = p.next.next
    return vhead.next
};