function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head) return null

    // 反转n个节点的函数
    function reverseN(head:ListNode | null, n:number){
        if(n === 1) return head
        let tail = head.next
        let p = reverseN(head.next, n - 1)
        head.next = tail.next
        tail.next = head

        return p
    }

    // 创建一个虚拟头节点
    let vhead = new ListNode(0,head)
    let p = vhead
    let count = right - left + 1

    // 先找到要反转节点的前一个节点
    while(--left) {
        p = p.next
    }
    // 将反转链表的第一个节点和节点数传入
    p.next = reverseN(p.next,count)

    return vhead.next
    
};