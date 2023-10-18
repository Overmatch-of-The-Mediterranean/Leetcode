function swap(arr: number[], l: number, r: number) {
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

function getMid(a: number, b: number, c: number) {
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }

    if (a > c) {
        let temp = a
        a = c
        c = temp
    }

    if (b > c) {
        let temp = b
        b = c
        c = temp
    }

    return b
}

function quickSort(arr:number[], l:number, r:number, k:number) {
    if(l > r) return

    let x = l
    let y = r
    const mid = getMid(arr[l], arr[Math.floor((l + r) / 2)], arr[r])

    while(x <= y){
        while(arr[x] < mid) x++
        while(arr[y] > mid) y--

        if(x <= y) {
            swap(arr,x,y)
            x++
            y--
        }
    }

    // 只要分出最左边有k个元素的区域，就可以返回了，不需要再将这k个元素排序
    if(y - l === k - 1) {
        return
    } else if(y - l >= k) {
        quickSort(arr, l, y, k)
    } else {
        quickSort(arr, x, r, k - x + l)
    }

}

function smallestK(arr: number[], k: number): number[] {

    quickSort(arr, 0, arr.length - 1,k)

    return arr.slice(0,k)

};