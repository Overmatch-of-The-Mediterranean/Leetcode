// 相同思路自己写的，又臭又长
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(-1)
  let p = head
  let p1 = l1
  let p2 = l2
  let temp = 0
  while (p1 || p2) {
    if (p1 && p2) {
      // 两数相加，取个位数后，再加上temp，看是否需要进一，若进一后为10，则还是取其个位数
      p.next = new ListNode((p1.val + p2.val + temp) % 10)
      p = p.next
      // 如果>=10,则把1存储起来，<10,则为0
      temp = parseInt(((p1.val + p2.val + temp) / 10) % 10)
      // 如果temp为1，说明两数相加大于10，则，开辟一个新结点，先赋值为1，再次循环时，其值会被替代
      if (temp == 1) {
        p.next = new ListNode(temp)
      }
      p1 = p1.next
      p2 = p2.next
    } else if (p1) {
      // l1比l2长时的情况
      p.next = new ListNode((p1.val + temp) % 10)
      p = p.next
      temp = parseInt(((p1.val + temp) / 10) % 10)
      if (temp == 1) {
        p.next = new ListNode(temp)
      }
      p1 = p1.next
    } else {
      //l2比l1长时的情况
      p.next = new ListNode((p2.val + temp) % 10)
      p = p.next
      temp = parseInt(((p2.val + temp) / 10) % 10)
      if (temp == 1) {
        p.next = new ListNode(temp)
      }
      p2 = p2.next
    }
  }
  return head.next
}

// 人家写的，非常简洁
var addTwoNumbers = function (l1, l2) {
  let carry = 0 // 进位数
  let head = new ListNode(0)
  let cur = head
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + carry // 两数相加，再加上低位向高位的进位
    carry = Math.floor(sum / 10) // 取进位数
    cur.next = new ListNode(sum % 10) // 取个位值
    cur = cur.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return head.next
}
