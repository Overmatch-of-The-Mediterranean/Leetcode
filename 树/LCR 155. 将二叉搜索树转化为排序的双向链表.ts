let head, pre 

// 遇到二叉搜索树排序，往中序遍历上想
function inOrder(root) {
    if(!root) return
    inOrder(root.left)
    if(!pre) {
        head = root
    } else {
        pre.right = root
    }

    root.left = pre

    pre = root

    inOrder(root.right)
}

var treeToDoublyList = function(root) {
    if(!root) return root

    // leetcode测试时，不同测试实例用的是同一个全局变量，所以每次测试都需要重置
    head = pre = null
    
    inOrder(root)

    head.left = pre
    pre.right = head


    return head

};