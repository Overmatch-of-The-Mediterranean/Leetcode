class MinStack {

    s:number[] = []
    min_x:number[] = []
    constructor() {
        
    }

    push(val: number): void {
        this.s.push(val)
        if(!this.min_x.length || val <= this.min_x[this.min_x.length - 1]) this.min_x.push(val)
    }

    pop(): void {
        const val = this.s.pop()
        if(val === this.min_x[this.min_x.length - 1]) this.min_x.pop()
    }

    top(): number {
        return this.s[this.s.length - 1]
    }

    getMin(): number {
        return this.min_x[this.min_x.length - 1]
    }
}