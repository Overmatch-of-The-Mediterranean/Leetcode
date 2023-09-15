class MyCircularDeque {
    data:number[]
    size:number
    cnt:number = 0
    head:number = 0
    tail:number = 0
    constructor(k: number) {
        this.data = Array(k)
        this.size = k
    }

    insertFront(value: number): boolean {
        if(this.isFull()) return false
        this.head = (this.head - 1 + this.size) % this.size
        this.data[this.head] = value
        this.cnt++
        return true
    }

    insertLast(value: number): boolean {
        if(this.isFull()) return false
        this.data[this.tail] = value
        this.tail = (this.tail + 1) % this.size
        this.cnt++
        return true
    }

    deleteFront(): boolean {
        if(this.isEmpty()) return false
        this.head = (this.head + 1) % this.size
        this.cnt--
        return true
    }

    deleteLast(): boolean {
        if(this.isEmpty()) return false
        this.tail = (this.tail - 1 + this.size) % this.size
        this.cnt--
        return true
    }

    getFront(): number {
        if(this.isEmpty()) return -1
        return this.data[this.head]
    }

    getRear(): number {
        if(this.isEmpty()) return -1
        return this.data[(this.tail - 1 + this.size) % this.size]
    }

    isEmpty(): boolean {
        return this.cnt === 0
    }

    isFull(): boolean {
        return this.cnt === this.size
    }
}