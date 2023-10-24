class LNode{
    key:number
    value:number
    next: LNode | null
    constructor(key: number, value:number, next: LNode | null){
        this.key = key
        this.value = value
        this.next = next
    }

    // 头插法
    insert_after(node){
        node.next = this.next
        this.next = node
    }

    remove_after(){
        if(!this.next) return
        this.next = this.next.next
    }
}

class MyHashMap {
    data:LNode[] = []

    hash_func(key:number) {
        return key
    }

    put(key: number, value: number): void {
        const index = this.hash_func(key)
        let p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, -1, null)
        while(p.next && p.next.key !== key) p = p.next
        if(p.next){
            p.next.value = value
        } else {
            p.insert_after(new LNode(key, value, null))
        }
    }

    get(key: number): number {
        const index = this.hash_func(key)
        let p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, -1, null)

        while(p && p.key !== key) p = p.next
        if(p) return p.value
        return -1
    }

    remove(key: number): void {
        const index = this.hash_func(key)
        let p = this.data[index] ? this.data[index] : this.data[index] = new LNode(-1, -1, null)
        while(p.next && p.next.key !== key) p = p.next
        if(p.next) {
            p.remove_after()
        } else {
            return
        }
    }
}