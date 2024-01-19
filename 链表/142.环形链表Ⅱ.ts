function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let p = head
  let q = head.next
  // 初时时，q必须要比q多一步，要不然下面循环不成立
  // 比如head到环形链表的第一个节点的距离是x，因为初始时，q比p多了一步，
  // 所以，当p到达环形链表第一个节点时，q与环形起点的逆时针距离是x+1
  // 设环形链表总步长为a，此时环中q到p的顺时针距离是a-x-1，
  // 再循环a-x-1次，q就可以追上p，追上后此时两者距离环形起点逆时针距离是a-x-1
  // 也就是q顺时针距离环形起点x+1，这时p重置为head，q置为q.next，
  // 此时p与q顺时针距离环形起点都是x步，两者步长都设为1，则再共同前进x步，就可以再环形起点重合
  while (p != q && q && q.next) {
    p = p.next
    q = q.next.next
  }

  if (!q || !q.next) return null

  p = head
  q = q.next
  while (p != q) {
    p = p.next
    q = q.next
  }

  return q
}
export {}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let p = head
  let q = head

  do {
    p = p.next
    q = q.next.next
  } while (p != q && q && q.next)

  if (!q || !q.next) return null

  p = head

  while (p != q) {
    p = p.next
    q = q.next
  }

  return q
}
