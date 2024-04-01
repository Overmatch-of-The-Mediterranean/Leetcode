// 其实就是约瑟夫环
function iceBreakingGame(num: number, target: number): number {
  let position = 0

  for (let i = 2; i <= num; i++) {
    position = (position + target) % i
  }
  return position
}

// 超时
// function iceBreakingGame(num: number, target: number): number {
//     const queue = []

//     for (let i = 0; i < num; i++) {
//         queue.push(i)
//     }

//     while (queue.length > 1) {
//         for (let i = 1; i < target; i++) {
//             queue.push(queue.shift()!)
//         }
//         queue.shift()
//     }

//     return queue.shift()!
// };
