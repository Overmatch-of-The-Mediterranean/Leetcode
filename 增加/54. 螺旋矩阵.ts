function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length
  let n = matrix[0].length

  let top = 0
  let left = 0
  let bottom = m - 1
  let right = n - 1
  let result = []

  while (top <= bottom && left <= right) {
    console.log(111)

    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
      console.log(matrix[top][i])
    }

    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right])
      console.log(matrix[i][right])
    }

    if (top < bottom && left < right) {
      for (let i = right - 1; i >= left; i--) {
        result.push(matrix[bottom][i])
      }

      for (let i = bottom - 1; i >= top + 1; i--) {
        result.push(matrix[i][left])
      }
    }
    top++
    left++
    right--
    bottom--
  }

  return result
}
