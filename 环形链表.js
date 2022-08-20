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