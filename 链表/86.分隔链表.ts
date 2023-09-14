function partition(head: ListNode | null, x: number): ListNode | null {

    if(!head) return null

    let small = new ListNode(-1)
    let big = new ListNode(-1)
    let s1:ListNode | null = small
    let b1:ListNode | null = big
    let p = head
    let q:ListNode | null

    // 新建两个链表，分别存放，大/小的值，最后再连接起来

    while(p) {
        q = p.next

        if(p.val < x) {
            p.next = s1.next // 将节点指向null，拆掉节点
            s1.next = p
            s1 = p
        } else {
            p.next = b1.next
            b1.next = p
            b1 = p
        }
        p = q
     }

     s1.next = big.next

     return small.next
     

};