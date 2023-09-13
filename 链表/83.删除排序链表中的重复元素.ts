function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null

    let p = head

    while(p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return head
};