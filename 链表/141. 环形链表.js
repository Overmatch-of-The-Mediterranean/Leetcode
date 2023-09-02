// 第一种，自己想的，效率低，时间复杂度太高
var hasCycle = function (head) {
  let arr = [head];
  let point = head;
  while (point && point.next) {
    point = point.next
    // 把下一个节点和以前走过的节点比较，看是否重复，重复则有环
    for (let i = 0; i < arr.length; i++) {
      if (point == arr[i]) return true;
    }
    // 将不重复的节点，放入数组中
    arr.push(point);
  }
  // 若走到头，即，next===null，就是无环
  return false
};

// 第二种,双指针,效率高,学的网上的
var hasCycle = function (head) {
  let slow = head;
  let fast = head
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true
    }
  }
  return false
};