function swap (arr:number[], i:number, j:number) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function threePartition(arr:number[],l:number,r:number,mid:number){
        if(l >= r) return

        let x = -1
        let y = r + 1
        let i = l
        while(i < y) {
            if(arr[i] === mid) {
                i++
            } else if(arr[i] < mid) {
                x++
                swap(arr, i , x)
                i++
            } else if(arr[i] > mid) {
                y--
                swap(arr, i , y)
            }
        }

}

function sortColors(nums: number[]): void {
    threePartition(nums,0 , nums.length - 1,1)
};