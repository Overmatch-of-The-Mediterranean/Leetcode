class UnionSet {
    fa:number[] = []
    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
        }
    }

    find(x:number){
        // 路径压缩
        return this.fa[x] = (this.fa[x] === x ? x : this.find(this.fa[x]))
    }

    merge(a:number ,b:number){
        this.fa[this.find(a)] = this.find(b)
    }
}




function numIslands(grid: string[][]): number {
    const n = grid.length
    const m = grid[0].length

    // 二维转化成一维
    const u = new UnionSet(n * m)
    
    // 将二维中的坐标转换为一维中的索引
    function index (i, j) {
        return  i * m + j
    }
    console.log(u)

    for(let i = 0;i < n;i++) {
        for(let j = 0;j < m;j++){
            if(grid[i][j] === '0') continue

            // 每个节点不需要连接四个方向，每个节点只需要连接上，左两个方向即可
            // 判断上面是否有陆地
            if(i > 0 && grid[i - 1][j] === '1') u.merge(index(i, j), index(i - 1, j))
            // 判断左边是否有陆地
            if(j > 0 && grid[i][j - 1] === '1') u.merge(index(i, j), index(i, j - 1))
        }
    }

    console.log(u)
    let ans = 0
    for(let i = 0;i < n;i++) {
        for(let j = 0;j < m;j++) {
            if(grid[i][j] === '1' && u.find(index(i, j)) === index(i, j)) ans++
        }
    }

    return ans

};