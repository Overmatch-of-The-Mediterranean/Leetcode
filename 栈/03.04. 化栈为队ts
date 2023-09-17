class MyQueue {
    s1:number[] = [] // 负责pop元素
    s2:number[] = [] // 负责push元素

    tranverse(){
        if(this.s1.length !== 0)  return
        while(this.s2.length !== 0) {
            this.s1.push(this.s2.pop())
        }
    }

    push(x: number): void {
        this.s2.push(x)
    }

    pop(): number {
        this.tranverse()
        return this.s1.pop()
    }

    peek(): number {
        this.tranverse()
        return this.s1[this.s1.length - 1]
    }

    empty(): boolean {
        return this.s1.length === 0 && this.s2.length === 0
    }
}