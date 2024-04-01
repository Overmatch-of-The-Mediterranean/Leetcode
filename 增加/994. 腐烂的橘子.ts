function orangesRotting(grid: number[][]): number {
  let r = grid.length
  let c = grid[0].length

  let fresh = 0
  let queue = []
  let time = 0

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        fresh++
      } else if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  while (queue.length && fresh) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      const item = queue.shift()
      for (let j = 0; j < 4; j++) {
        let x = item[0] + direction[j][0]
        let y = item[1] + direction[j][1]
        if (grid[x] && grid[x][y] && grid[x][y] === 1) {
          fresh--
          grid[x][y] = 2
          queue.push([x, y])
        }
      }
    }
    time++
  }

  return fresh === 0 ? time : -1
}
