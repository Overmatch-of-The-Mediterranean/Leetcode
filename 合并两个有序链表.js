// 建立虚拟链表
var mergeTwoLists = function (list1, list2) {
  // 用p指向虚拟链表的头节点，每次比较后，next指向小的节点，谁小，谁所在链表的指向下个节点，继续和大的节点比较。
  let head = new ListNode();    //里面输入的参数，代表头节点的val，没有参数则val默认为0.
  let p1 = list1;
  let p2 = list2;
  let p = head;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    // 每次操作完后，p需要指向新开辟的节点。
    p = p.next;
  }
  if (p1) p.next = p1;
  if (p2) p.next = p2;
  return head.next;
}



// 递归
// 两个节点存储的值进行比较，小的那方的next，需要指向大的节点。
// 然后小的节点所在链表，继续移向链表的下个节点，继续和大的进行比较。
// 谁小，谁所在链表的指向下个节点，继续和大的节点比较。
var mergeTwoLists = function f(list1, list2) {
  if (!list1 || !list2) return list1 || list2;
  if (list1.val < list2.val) {
    list1.next = f(list1.next, list2);
    return list1;
  } else {
    list2.next = f(list1, list2.next);
    return list2;
  }
}