class MyCircularQueue {
    data:number[]
    length:number
    size:number = 0
    head:number = 0
    tail:number = 0
    constructor(k: number) {
        this.data = Array(k)
        this.length = k
    }

    enQueue(value: number): boolean {
        if(this.isFull()) return false
        this.data[this.tail] = value
        this.tail = (this.tail + 1) % this.length
        this.size++
        return true
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false
        this.head = (this.head+1) % this.length
        this.size--
        return true
    }

    Front(): number {
        if(this.isEmpty()) return -1
        return this.data[this.head]
    }

    Rear(): number {
        if(this.isEmpty()) return -1
        return this.data[(this.tail - 1 +this.length) % this.length]
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.length
    }
}