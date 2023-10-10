class UnionSet{
    fa:number[] = []
    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
        }
    }

    find(x:number){
        return this.fa[x] = (this.fa[x] ===x ? x:this.find(this.fa[x]))
    }

    merge(a:number, b:number){
        this.fa[this.find(a)] = this.find(b)
    }
}

function findCircleNum(isConnected: number[][]): number {

    const n = isConnected.length 
    const u = new UnionSet(n)

    for(let i = 0;i < n;i++) {
        for(let j = 0;j < n;j++){
            if(isConnected[i][j] === 1) u.merge(i,j)
        }
    }

    let ans = 0
    for(let i = 0;i < n;i++) {
        if(u.find(i) === i) ans++
    }

    return ans

};