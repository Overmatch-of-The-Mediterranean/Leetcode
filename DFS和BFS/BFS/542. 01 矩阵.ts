function init(q:Data[],vis:number[][], mat:number[][]){
    let n = mat.length
    let m = mat[0].length
    for(let i = 0; i < n;i++) {
        vis.push([])
        for(let j = 0;j < m;j++) {
            vis[i].push(-1)
        }
    }

    for(let i = 0;i < n;i++) {
        for(let j = 0;j < m;j++) {
            if(mat[i][j] !== 0) continue
            vis[i][j] = 0
            q.push(new Data(i,j,0))
        }
    }
}

class Data{
    i:number = 0
    j:number = 0
    // 从0到达其他数字的最小距离
    k:number = 0
    constructor(i:number, j:number, k:number){
        this.i = i
        this.j = j
        this.k = k
    }
}


function updateMatrix(mat: number[][]): number[][] {
    const n = mat.length
    const m = mat[0].length
    const q:Data[] = [] 

    // 方向数组
    const dir:number[][] = [[0,1], [1,0],[0,-1], [-1, 0]]

    let vis:number[][] = []
    init(q,vis,mat)

    while(q.length) {
        let cur = q.shift()

        for(let k = 0;k < 4;k++) {
            let x = cur.i + dir[k][0]
            let y = cur.j + dir[k][1]
        
            // 排除非法状态
            if(x < 0 || x >= n) continue
            if(y < 0 || y >= m) continue
            if(vis[x][y] !== -1) continue
            vis[x][y] = cur.k + 1
            q.push(new Data(x, y, cur.k + 1))

        }
    }

    
    

    return vis
};