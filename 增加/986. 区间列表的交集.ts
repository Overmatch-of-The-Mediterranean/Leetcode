function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  let result = []
  let i = 0
  let j = 0
  while (i < firstList.length && j < secondList.length) {
    const a0 = firstList[i][0]
    const a1 = firstList[i][1]
    const b0 = secondList[j][0]
    const b1 = secondList[j][1]

    if (b1 >= a0 && a1 >= b0) {
      result.push([Math.max(a0, b0), Math.min(a1, b1)])
    }

    if (b1 < a1) j++
    else i++
  }

  return result
}
