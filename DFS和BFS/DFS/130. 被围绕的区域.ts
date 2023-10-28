const dir:number[][] = [[0,1], [1,0] ,[0,-1],[-1,0]]

function dfs(i:number,j:number,board, n:number, m:number){
    board[i][j] = 'o'

    for(let k = 0;k < 4;k++) {
        const x = i + dir[k][0]
        const y = j + dir[k][1]
        if(x < 0 || x >= n) continue
        if(y < 0 || y >= m) continue
        if(board[x][y] !== 'O') continue

        dfs(x, y, board, n, m)
    }
    
}

function solve(board: string[][]): void {
    const n = board.length
    const m = board[0].length
    for(let i = 0;i < n;i++) {
        if(board[i][0] === 'O') dfs(i, 0 ,board, n, m)
        if(board[i][m-1] === 'O') dfs(i, m - 1, board, n, m)
    }

    for(let i = 0;i < m;i++) {
        if(board[0][i] === 'O') dfs(0, i, board, n, m)
        if(board[n-1][i] === 'O') dfs(n-1, i, board, n, m)
    }

    for(let i = 0;i < n;i++) {
        for(let j = 0;j < m;j++){
            if(board[i][j] === 'O') board[i][j] = 'X'
            if(board[i][j] === 'o') board[i][j] = 'O'
        }
    }
    
};