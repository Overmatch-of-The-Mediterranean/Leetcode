var copyRandomList = function (head) {
  if (!head) return null

  let p = head
  let newHead
  let q
  // 1.将原链表的每个节点复制一份，插入每个复制节点的后面
  while (p) {
    q = new Node(p.val)
    q.random = p.random
    q.next = p.next
    p.next = q
    p = q.next
  }

  // 2.调整复制节点的randon的指向，因为要满足复制链表中的指针都不应指向原链表中的节点，所以将random向后移动一位即可

  p = head.next
  while (p) {
    if (p.random) p.random = p.random.next
    if ((p = p.next)) {
      p = p.next
    }
  }

  // 3.断开链表
  p = head
  newHead = head.next
  while (p) {
    q = p.next
    p.next = q.next
    if (p.next) q.next = p.next.next
    p = p.next
  }

  return newHead
}
