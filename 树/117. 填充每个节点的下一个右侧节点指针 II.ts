function layer_connect(root: Node | null){
    let p = root

    let pre = null, new_head = null

    while(p) {
        if(p.left) {
            if(pre) pre.next = p.left
            pre = p.left
        }

        if(!new_head) new_head = pre

        if(p.right) {
            if(pre) pre.next = p.right
            pre = p.right
        }

        if(!new_head) new_head = pre
        
        p = p.next
    }

    return new_head


}

function connect(root: Node | null): Node | null {
    if(!root) return root
    let p = root

    // 每次拿到连接好的这一层的第一个节点，然后利用这个节点连接下一层
    while(p = layer_connect(p)) ;
    return root
};