function maxSlidingWindow(nums: number[], k: number): number[] {

    let arr:number[] = []
    let dequeue:number[] = []

    let index = 0
    while(index < nums.length) {
      
      // 保持视口长度
      if(dequeue.length > 0 && dequeue[0] + k <= index) {
        dequeue.shift()
      }

      
      while(dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= nums[index]) {
        dequeue.pop()
      }

      dequeue.push(index)
      index++

      if(index >= k) arr.push(nums[dequeue[0]])
    }

    return arr
};