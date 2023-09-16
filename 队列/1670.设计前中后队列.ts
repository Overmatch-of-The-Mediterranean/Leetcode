class DeNode{
    value?:number
    next:DeNode
    prev:DeNode

    constructor(value?:number){
        this.value = value || undefined
    }

    // 插入当前节点的后一位
    insert_next(node:DeNode){
        node.next = this.next
        this.next = node
        node.prev = this
        if(node.next) node.next.prev = node
    }

    // 插入当前节点的前一位
    insert_prev(node:DeNode){
        node.next = this
        if(this.prev) this.prev.next = node
        node.prev = this.prev
        this.prev = node
    }

    // 删除下一个节点
    delete_next(){
        const node = this.next
        this.next = node.next
        if(node.next) node.next.prev = this
        return node.value
    }

    // 删除前一个节点
    delete_prev(){
        const node = this.prev
        this.prev = node.prev
        if(node.prev) node.prev.next = this
        return node.value
    }

}

// 链表实现双端队列,此链表需要是双向链表
// 设置头尾虚拟节点，方便插入/删除节点
class Dequeue {
    head:DeNode = new DeNode()
    tail:DeNode = new DeNode()
    data:number[]
    cnt:number = 0
    constructor(){
        this.head.next = this.tail
        this.head.prev = null
        this.tail.prev = this.head
        this.tail.next = null
    }

    push_front(value:number){
        this.head.insert_next(new DeNode(value))
        this.cnt++
    }
    push_back(value:number){
        this.tail.insert_prev(new DeNode(value))
        this.cnt++
    }
    pop_front(){
        if(this.isEmpty()) return -1
        const value = this.head.delete_next()
        this.cnt--
        return value
    }
    pop_back(){
        if(this.isEmpty()) return -1
        const value = this.tail.delete_prev()
        this.cnt--
        return value
    }

    get size(){
        return this.cnt
    }

    isEmpty (){
        if(this.cnt === 0)
        return this.cnt === 0
    }
    
}

class FrontMiddleBackQueue {
    q1:Dequeue = new Dequeue()
    q2:Dequeue = new Dequeue()

    constructor() {
        
    }

    pushFront(val: number): void {
        this.q1.push_front(val)
        this.update()
    }

    pushMiddle(val: number): void {
        if(this.size % 2 === 0) {
            this.q1.push_back(val)
            
        } else {
            this.q2.push_front(this.q1.pop_back())
            this.q1.push_back(val)
        }
    }

    pushBack(val: number): void {
        this.q2.push_back(val)
        this.update()
    }

    popFront(): number {
        if(this.isEmpty()) return -1
        const value = this.q1.pop_front()
        this.update()
        return value
    }

    popMiddle(): number {
        if(this.isEmpty()) return -1
        const value = this.q1.pop_back()
        this.update()
        return value
    }

    popBack(): number {
        if(this.isEmpty()) return -1
        let value
        if(this.q2.isEmpty()) {
            value = this.q1.pop_back()
        } else {
            value = this.q2.pop_back()
        }
        this.update()
        return value
    }
    
    isEmpty(){
        return this.q1.size === 0
    }

    get size(){
        return this.q1.size + this.q2.size
    }

    // 更新队列，保证q1>=q1 && q1的长度只能比q2大1
    update(){
        if(this.q1.size < this.q2.size) {
            
            this.q1.push_back(this.q2.pop_front())
        }
        if(this.q1.size === this.q2.size + 2) {
            this.q2.push_front(this.q1.pop_back())
        }
    }
}