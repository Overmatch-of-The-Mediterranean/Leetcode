function getBoard (queens:number[], n:number) {
    const board:string[] = []
    for(let i = 0;i < n;i++) {
        let str = '.'.repeat(n)
        let arr:string[] = str.split('')
        arr[queens[i]] = 'Q'
        str = arr.join('')
        board.push(str)
    }

    return board
}

function dfs(
    queens:number[], 
    n:number, 
    row:number,
    columes:Map<number, number>, 
    diagonals1:Map<number, number>, 
    diagonals2:Map<number, number>, 
    ret:string[][]
    ) {
    if(row === n) {
        const board:string[] = getBoard(queens, n)
        ret.push(board)
        return
    }
    for(let i = 0;i < n;i++) {
        // 判断此位置是否符合要求
        if(columes.get(i)) continue
        if(diagonals1.get(row - i)) continue
        if(diagonals2.get(row + i)) continue

        // 此位置符合要求，将当前皇后的列，两个斜方向保存
        queens[row] = i
        columes.set(i, 1)
        diagonals1.set(row - i, 1)
        diagonals2.set(row + i, 1)

        dfs(queens, n, row + 1, columes, diagonals1, diagonals2, ret)
        // 后续的位置有不符合要求的，则退回原来的状态，进入下一次循环探索该行的下个位置是否符合整体要求
        queens[row] = -1
        columes.delete(i)
        diagonals1.delete(row - i)
        diagonals2.delete(row + i)
    }
}

function solveNQueens(n: number): string[][] {

    const ret:string[][] = []
    // 存储每位皇后所在的列
    const queens:number[] = []

    // 皇后的列
    const columes = new Map<number, number>()
    // 皇后的两条斜线
    // 从左上到右下，行和列相减的值相同，一个值就可以代表一个斜线
    const diagonals1 = new Map<number, number>()
    // 从右上到左下，行和列相加的值相同
    const diagonals2 = new Map<number, number>()

    

    dfs(queens, n, 0, columes, diagonals1, diagonals2, ret)
    return ret

};