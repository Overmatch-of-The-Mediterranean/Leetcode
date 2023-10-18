class Data {
    index:number
    val:number
    cnt:number = 0
    constructor(index:number, val:number){
        this.index = index
        this.val = val
    }

    valueOf() {
        return this.val
    }
}


function mergeSort (arr:Data[],l:number, r:number) {
    if(l>=r) return

    let temp:Data[] = []
    const mid = Math.floor((l + r) / 2)

    mergeSort(arr, l, mid)
    mergeSort(arr, mid + 1, r)

    let p1 = l, p2 = mid + 1
    while(p1 <= mid || p2 <= r) {
        if(p2 > r || (p1 <= mid && arr[p1] > arr[p2])){
            arr[p1].cnt += r - p2 + 1
            temp.push(arr[p1++])
        } else {
            temp.push(arr[p2++])
        }
    }

    for(let i = l;i <= r;i++) arr[i] = temp[i - l]
}

function countSmaller(nums: number[]): number[] {
    let result:number[] = []
    const arr:Data[] = []
    for(let i = 0;i < nums.length;i++) {
        arr.push(new Data(i,nums[i]))
    } 

    mergeSort(arr, 0, arr.length - 1)

    for(let i = 0;i < arr.length;i++) {
        result[arr[i].index] = arr[i].cnt
    }
    return result
};