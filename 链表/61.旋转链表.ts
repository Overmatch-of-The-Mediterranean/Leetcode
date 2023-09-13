function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head) return null
    let p = head
    let n = 1
    while(p.next) {
        p = p.next
        n++
    }
    p.next = head

    // k大于链表长度的处理
    k = k % n
    n = n - k

    while(n--){
        p = p.next
    }

    head = p.next
    p.next = null

    return head


};