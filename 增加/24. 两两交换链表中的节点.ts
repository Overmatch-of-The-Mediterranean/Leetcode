function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}

// function swapPairs(head: ListNode | null): ListNode | null {
//     if(!head || !head.next) return head

//     let firstHead = new ListNode()
//     let secondHead = new ListNode()

//     let fp = firstHead
//     let sp = secondHead
//     let p = head
//     let q = head.next
//     while(p || q) {
//         fp.next = p
//         sp.next = q
//         fp = p
//         sp = q
//         if(p && (p = p.next)) p = p.next
//         if(q && (q = q.next)) q = q.next
//         console.log('pq',p,q)
//     }

//     if(fp) fp.next = null
//     if(sp) sp.next = null

//     p = firstHead.next
//     q = secondHead.next

//     let newHead = new ListNode()
//     let temp = newHead

//     while(p && q) {
//         let temp2 = q.next
//         temp.next = q
//         temp.next.next = p
//         p = p.next
//         q = temp2
//         temp = temp.next.next
//     }
//     if(p) temp.next = p

//     return newHead.next

// };
