class Data {
    i:number
    j:number
    k:number
    constructor(i:number,j:number,k:number){
        this.i = i
        this.j = j
        this.k = k
    }
}

function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    if(grid[0][0] === 1 || grid[n-1][n-1]) return -1
    const q:Data[] = []
    q.push(new Data(0, 0, 1))

    // 注意：fill方法填充的要是对象，则填充的是同一个对象
    const vis:number[][] = Array(n).fill(0).map(item => Array(n).fill(0))
    vis[0][0] = 1
    const dir:number[][] = [
        [0,1], [1,0],[0,-1],[-1,0],
        [-1,1], [1,1], [1,-1], [-1,-1]
    ]

    while(q.length) {
        let cur = q.shift()
        console.log('cur', cur)
        if(cur.i === n - 1 && cur.j === n - 1) {
            return cur.k
        }
        for(let i = 0;i < 8;i++) {
            let x = cur.i + dir[i][0]
            let y = cur.j + dir[i][1]
            
            if(x < 0 || x >= n) continue
            if(y < 0 || y >= n) continue
            if(grid[x][y] !== 0) continue
            if(vis[x][y] === 1) continue
           
            vis[x][y] = 1
            q.push(new Data(x, y, cur.k + 1))
            
        }
    }
    return -1

};