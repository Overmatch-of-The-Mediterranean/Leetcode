function serialize(root: TreeNode | null): string {
    if(!root) return ''

    // root转化成广义表
    let ret = ''
    ret += root.val
    
    if(!root.left && !root.right) return ret

    ret += '('
    if(root.left) {
        ret += serialize(root.left)
    }
    if(root.right) {
        ret += ','
        ret += serialize(root.right)
    }

    ret += ')'

    return ret
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let head = null
    let p = null
    // 相当于有限自动机的状态
    let scode = 0
    let index = 0

    // 判断当前是左节点还是右节点，k=1是左节点，k=2是右节点
    let k = 0
    const stack = []

    while(index < data.length) {
        switch(scode) {
            // 相当于有限自动机，当前状态识别一个字符后，变成后续的状态
            case 0:
                // 遇到数字说明要进行节点创建的操作了
                if(data[index] >= '0' && data[index] <= '9') scode = 1
                else if(data[index] === '(') scode = 2 // 遇到(，说明要压入栈，接下来处理左子树
                else if(data[index] === ',') scode = 3 // 遇到"," ，说明接下来要处理右子树
                else if(data[index] === ')') scode = 4 // 遇到)，说明栈顶节点已经处理完毕，要出栈
                break
            case 1:
                let num = 0
                while(data[index] >= '0' && data[index] <= '9') {
                    num = num * 10 + data[index].charCodeAt(0) - '0'.charCodeAt(0)
                    index++
                }

                p = new TreeNode(num)
                if(!head) head = p

                if(k === 1) {
                    stack[stack.length-1].left = p
                } else if(k === 2) {
                    stack[stack.length-1].right = p
                }
                scode = 0
                break
            case 2:
                stack.push(p)
                index++
                k = 1
                scode = 0
                break
            case 3:
                index++
                k = 2
                scode = 0
                break
            case 4:
                stack.pop()
                index++
                scode = 0
                break
        }
    }

    return head

    
};