class StockSpanner {
    t:number = 0
    s:number[][] = [[Number.MAX_VALUE, this.t++]]
    constructor() {
        
    }

    next(price: number): number {
        while(this.s.length && price >= this.s[this.s.length - 1][0]) this.s.pop()
        const ret = this.t - this.s[this.s.length - 1][1]

        this.s.push([price, this.t++])
        return ret
    }
}