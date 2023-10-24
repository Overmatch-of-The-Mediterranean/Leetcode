class LNode {
    key:number
    next:LNode | null
    constructor(key:number, next:LNode | null){
        this.key = key
        this.next = next
    }

    // 头插法
    insert_after(node:LNode){
        node.next = this.next
        this.next = node
    }

    remove_after() {
        if(!this.next) return
        this.next = this.next.next
    }
}

class MyHashSet {
    data:LNode[] = []
    constructor() {
        
    }

    hash_func(key:number){
        return key
    }


    add(key: number): void {
        if(this.contains(key)) return
        const index = this.hash_func(key)
        const p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, null)
        p.insert_after(new LNode(key, null))
    }

    remove(key: number): void {
        const index = this.hash_func(key)
        let p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, null)
        while(p.next && p.next.key !== key) p = p.next
        if(p.next) p.remove_after()
        else return
    }

    contains(key: number): boolean {
        const index = this.hash_func(key)
        let p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, null)
        while(p && p.key !== key) p = p.next
        if(p) return true
        return false
    }
}