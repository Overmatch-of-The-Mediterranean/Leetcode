function swap(arr:number[], i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function firstMissingPositive(nums: number[]): number {
    
    for(let i = 0;i < nums.length;i++) {

        // 保证每个位置上的值要么是index + 1，要么 <= 0，要么 > nums.length
        while(nums[i] !== i + 1) {
            if(nums[i] <= 0 || nums[i] > nums.length) break

            let index = nums[i] - 1
            // 说明此位置上的值已满足条件，判断下一位置的值
            if(nums[i] === nums[index]) break
            swap(nums, i, index)
        }
    }

    let index = 0
    while(index < nums.length && nums[index] === index + 1) index++
    return index + 1 
  


};