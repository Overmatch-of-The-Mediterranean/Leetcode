function mergeSort(head: ListNode | null, n:number){
    
    if(!head || head.next === null) return head

    let l = Math.floor(n / 2) // 左部分链表的长度
    let r = n - l // 右部分链表的长度

    let lp = head
    let rp = head
    let p

    // 让rp指向右边第一个节点的前一个节点
    for(let i = 1;i < l;i++){
        rp = rp.next
    }

    // 将链表从中间断开
    p = rp
    rp = rp.next
    p.next = null

    lp = mergeSort(lp, l)
    rp = mergeSort(rp, r)
    let newHead = new ListNode(0)
    p = newHead

    // 合并链表
    while(lp || rp){
        if(!rp || (lp && lp.val < rp.val)){
            p.next = lp
            lp = lp.next
            p = p.next

        } else {
            p.next = rp
            rp = rp.next
            p = p.next
        }
    }

    return newHead.next

}


function sortList(head: ListNode | null): ListNode | null {
    let n:number = 0
    let p = head
    while(p) {
        n++
        p = p.next
    }

    return mergeSort(head, n)

};