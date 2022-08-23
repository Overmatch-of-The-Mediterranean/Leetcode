// 自己想出来的，用时52~76ms,击败9.77~97.69% ,内存41.3MB~41.7MB，击败33%~97%
var removeNthFromEnd = function (head, n) {
  let hair = head;
  let p = head;  //用来统计链表长度用的
  let predel = head;  //表示被删除结点的上一个结点
  let length = 0;
  // 获取链表的长度
  while (p) {
    length++;
    p = p.next;
  }
  // 如果只有一个结点，删除的只能是这一个结点,所以返回空结点;
  if (length == 1) return p;
  // 删除第一个节点的情况
  if (length - n == 0) return hair.next;
  // 删除其它结点的情况
  for (let i = 1; i <= length - n + 1; i++) {
    // 当i为被删除结点的上一个节点时，令其指向被删除结点的下一个结点，就完成了，删除指定的结点
    if (i == length - n) {
      predel.next = predel.next.next;
    } else {
      predel = predel.next;
    }
  }
  return hair;
};