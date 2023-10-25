class LNode {
    key:number
    value:number
    prev:LNode|null
    next:LNode|null

    constructor(key:number, value:number, prev:LNode|null, next:LNode|null){
        this.key = key
        this.value = value
        this.prev = prev
        this.next = next
    }

    remove_this():number{
        this.prev.next = this.next
        this.next.prev = this.prev
        this.prev = null
        this.next = null
        return this.key
    }

    insert_before(node: LNode) {
        node.next = this
        node.prev = this.prev
        this.prev.next = node
        this.prev = node
    }
}

// 哈希链表
class HashList {
    data:Map<number, LNode> = new Map<number,LNode>()

    head:LNode = new LNode(-1, -1, null, null)
    tail:LNode = new LNode(-1, -1, null, null)
    capacity:number

    constructor(capacity:number){
        this.head.next = this.tail
        this.tail.prev = this.head
        this.capacity = capacity
    }

    put(key: number,value: number){
        if(this.data.get(key)) {
            this.data.get(key).value = value
            this.data.get(key).remove_this()
        } else {
            this.data.set(key, new LNode(key, value, null, null))
        }

        this.tail.insert_before(this.data.get(key))

        // 增加完后，判断是否超容量
        if(this.data.size > this.capacity) {
            this.data.delete(this.head.next.remove_this())
        }
    }
    get(key: number){
        if(!this.data.get(key)) return -1
        
        this.data.get(key).remove_this()
        this.tail.insert_before(this.data.get(key))

        return this.data.get(key).value
    }

}

class LRUCache {
    h:HashList
    constructor(capacity: number) {
        this.h = new HashList(capacity)
    }

    get(key: number): number {
        return this.h.get(key)
    }

    put(key: number, value: number): void {
        this.h.put(key, value)
    }
}