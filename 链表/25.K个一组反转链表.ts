function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

    if(!head) return null


    // 反转n节点
    function _reverseN(head:ListNode | null,n:number){
        if(n === 1) return head
        let tail: ListNode | null = head.next
        let p = _reverseN(head.next, n - 1)
        head.next = tail.next
        tail.next = head

        return p
    }

    // 判断够不够k个一组
    function reverseN(head:ListNode | null,n:number) {
        let p = head
        let count = n

        // 为什么不写 &&p, 案例[1,2] k=2就不行
        while(--count && p){
            // console.log(n)
            // console.log(count)
            // console.log(p.next)
            // console.log(1111)
            p = p.next
            // console.log(2222)
        }
        if(!p) return head

        return _reverseN(head,n)
    }

    let vhead = new ListNode(0,head)
    let p = vhead
    let q = head

    while(((p.next = reverseN(q,k)) != q)){
        p = q
        q = q.next
    }


    return vhead.next

};