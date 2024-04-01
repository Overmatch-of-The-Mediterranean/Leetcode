function searchMatrix(matrix: number[][], target: number): boolean {
  let newMatrix = matrix.flat(1)

  let left = 0
  let right = newMatrix.length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    if (newMatrix[mid] === target) return true
    else if (newMatrix[mid] < target) left = mid + 1
    else {
      right = mid - 1
    }
  }

  return false
}
