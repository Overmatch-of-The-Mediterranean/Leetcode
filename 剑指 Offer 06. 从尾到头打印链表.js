var reversePrint = function (head) {
  const arr = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr
};


// 递归
var reversePrint = function (head) {
  if (!head) return [];
  let arr = reversePrint(head.next);
  arr.push(head.val);
  return arr
};
