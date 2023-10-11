class UnionSet {
    fa:number[] = []
    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
        }
    }

    get(x:number){
        // 路径压缩
        return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
    }

    merge(a:number ,b:number){
        this.fa[this.get(a)] = this.get(b)
    }
}

function removeStones(stones: number[][]): number {
    const n = stones.length

    const u = new UnionSet(n)

    // 记录x坐标，对应的石子
    const ind_x = new Map<number, number>()
    // 记录y坐标，对应的石子
    const ind_y = new Map<number, number>()

    for(let i = 0;i < n;i++) {
        const stone = stones[i]

        const x = stone[0]
        const y = stone[1]

        // 如果x坐标有石子，说明同行有石子，进行连接
        if(ind_x.get(x) === undefined ? false:true){
            u.merge(i, ind_x.get(x))
        }

        // 如果y坐标有石子，说明同列有石子，进行连接
        if(ind_y.get(y) === undefined ? false:true){
            u.merge(i, ind_y.get(y))
        }

        ind_x.set(x, i)
        ind_y.set(y, i)
    }

    // 获取石子组成的集合数
    let ans = 0
    for(let i = 0;i < n;i++) {
        if(u.get(i) === i) ans++
    }

    // 每个集合至少回剩一个石子
    // 可以移除的石子最大数量 = 石子总数 - 集合数
    return n - ans
};