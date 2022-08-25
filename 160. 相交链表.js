// 双指针
// 要点：消除长度差异
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  if (!p1 || !p2) return null;  // 不多余，会让代码执行次数更少，如，对于[2,4,5,6,7]和[],可直接返回。如果没有这一步，会执行下列循环，直至p1==p2==null,也能得到正确结果，但代码执行次数增加了。
  while (p1 !== p2) {
    p1 = p1 == null ? headB : p1.next;
    p2 = p2 == null ? headA : p2.next;
  }
  return p1;
};

// 哈希表
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  if (!p1 || !p2) return null;
  const map = new Map();
  while (p1) {
    map.set(p1);
    p1 = p1.next;
  }
  while (p2) {
    if (map.has(p2)) {
      return p2;
    } else {
      p2 = p2.next
    }
  }
};