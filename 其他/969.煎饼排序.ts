function pancakeSort(arr: number[]): number[] {
    function swap(arr:number[], i:number, j:number){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    function reverse(arr:number[],n:number,index:number[]){
        for(let i = 0, j = n - 1;i < j;i++, j--){
            swap(arr, i, j)

            // 此时已经交换
            index[arr[i]] = i
            index[arr[j]] = j
        }
    }


    let index:number[] = Array(arr.length + 1)
    let result:number[] = []

    // 记录所有数字的位置
    for(let i = 0;i < arr.length;i++) index[arr[i]] = i 
    
    for(let i = arr.length;i >= 1;i--) {
        // 判断该数字是否在正确位置
        if(index[i] === i - 1) continue
        
        // 判断未排序中的数字是否在数字的第一位，如果不是则翻转到第一位
        if(index[i] + 1 != 1) {
            result.push(index[i] + 1)
            reverse(arr,index[i] + 1,index)
        }

        // 判断是不是就剩最后一个
        if(i != 1) {
            result.push(i)
            reverse(arr,i,index)
        }
        
    }

    return result
};