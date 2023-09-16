class RecentCounter {
    data:number[] = []

    ping(t: number): number {
        this.data.push(t)
        while(t-3000 > this.data[0]) this.data.shift()
        return this.data.length
    }
}