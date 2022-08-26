//  迭代
// cur = 1->2->3->4->5    pre = null   第一次
// next = cur.next = 2->3->4->5     cur.next = pre = null     pre = cur = 1->null     cur = next = 2->3->4->5

// cur = 2->3->4->5     pre = 1->null   第二次
// next = cur.next = 3->4->5     cur.next = pre = 1->null     pre = cur = 2->1->null     cur = next = 3->4->5
// ...
// ...
// cur = 5->null    pre = 4->3->2->1->null   最后一次
// next = cur.next = null     cur.next = pre = 4->3->2->1->null     pre = cur = 5->4->3->2->1->null     cur = next = null

// return pre
var reverseList = function (head) {
  let next = null;
  let pre = null;
  let cur = head;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre
};



// 递归

//             node (这里的node，等价于node == 5)
//              ⬇
//  1->2->3->4->5

//  回溯过程
//             node
//              ⬇
//  1->2->3->4<-5
//           ⬇
//          null

//             node
//              ⬇
//  1->2->3<-4<-5
//        ⬇
//       null

//             node
//              ⬇
//  1->2<-3<-4<-5
//     ⬇
//    null

//             node
//              ⬇
//  1<-2<-3<-4<-5
//  ⬇
// null

// return node
//  null<-1<-2<-3<-4<-5
var reverseList = function f(head) {
  if (!head || !head.next) {
    return head;
  }
  let node = f(head.next)
  head.next.next = head;
  head.next = null;
  return node
};