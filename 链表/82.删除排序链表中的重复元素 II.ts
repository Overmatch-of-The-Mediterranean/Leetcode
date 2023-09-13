function deleteDuplicates(head: ListNode | null): ListNode | null {

    let vhead = new ListNode(0,head)
    let p = vhead
    let q = p

    while(p.next){
        if(p.next.next && p.next.val === p.next.next.val) {
            q = p.next.next.next
            while(q && p.next.val === q.val) q = q.next
            p.next = q
        }else {
            p = p.next
        }
    }

    return vhead.next

};