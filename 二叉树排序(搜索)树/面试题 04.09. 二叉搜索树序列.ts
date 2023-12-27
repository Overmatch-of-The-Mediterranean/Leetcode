

// 以[1,3,4,5,8,9,10](中序遍历)构建的二叉搜索树为例，走一遍流程就可以理解


function mergeSequences(l: number[], lindex: number, r: number[], rindex, buffer, ret) {
    if(l.length === lindex && r.length === rindex){
        ret.push([...buffer])
        return
    }

    if(lindex < l.length) {
        buffer.push(l[lindex])
        mergeSequences(l, lindex + 1, r, rindex, buffer, ret)
        buffer.pop()
    }

    if(rindex < r.length) {
        buffer.push(r[rindex])
        mergeSequences(l, lindex, r, rindex + 1, buffer, ret)
        buffer.pop()
    }

}

function BSTSequences(root: TreeNode | null): number[][] {
    let ret = []
    
    if(!root) {
        ret.push([])
        return ret
    }

    const l_arr = BSTSequences(root.left)
    const r_arr = BSTSequences(root.right)

    for(const l of l_arr) {
        for(const r of r_arr) {
            const buffer = []
            buffer.push(root.val)
            mergeSequences(l, 0, r, 0, buffer, ret)
        }
    }
    return ret
};