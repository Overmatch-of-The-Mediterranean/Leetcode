// 建立虚拟头节点
var mergeTwoLists = function (list1, list2) {
  // 虚拟头节点每次比较后，指向小的节点，谁小，谁所在链表的指向下个节点，继续和大的节点比较。
  let head = new NodeList(-1);
  let p1 = list1
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      head.next = p1;
      p1 = p1.next
    } else {
      head.next = p2;
      p2 = p2.next;
    }
  }
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