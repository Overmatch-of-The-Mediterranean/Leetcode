function searchMatrix(matrix: number[][], target: number): boolean {
    let i = 0
    let j = matrix[0].length - 1

    while(i < matrix.length && j >= 0) {
        console.log('matrix[i][j]',matrix[i][j])
        if(matrix[i][j] === target) return true
        if(matrix[i][j] < target) i++
        else j--
    }

    return false
};