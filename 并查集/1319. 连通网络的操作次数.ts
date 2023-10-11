class UnionSet {
    fa:number[] = []

    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
        }
    }

    get(x:number){
        return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
    }

    merge(a:number, b:number){
        this.fa[this.get(a)] = this.get(b)
    }

}
function makeConnected(n: number, connections: number[][]): number {
    // 最少操作次数 = 总的不同网络区域 - 1
    if(connections.length < n - 1) return -1

    const u = new UnionSet(n)

    // 划分网络区域
    for(let i = 0;i < connections.length;i++) {
        const connection = connections[i]
        u.merge(connection[0], connection[1])

    }

    // 统计网络区域数量
    let ans = 0
    for(let i = 0;i < n;i++) {
        if(u.get(i) === i) ans++
    }

    return ans - 1
};