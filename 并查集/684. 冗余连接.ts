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

function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length
    const u = new UnionSet(n)
    
    for(let i = 0;i < n;i++){
        const edge = edges[i]
        // 判断这两点是否在同一集合中，若是，则返回该冗余边，否则，连接两点
        if(u.get(edge[0]) === u.get(edge[1])) return edge
        u.merge(edge[0],edge[1])
    }

    return []

};