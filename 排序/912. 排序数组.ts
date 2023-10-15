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


let threshold = 16

function _quickSort(arr: number[], l: number, r: number) {
   
    while (r - l > threshold) {
        let x = l
        let y = r
        let mid = getMid(arr[l], arr[Math.floor((l + r) / 2)], arr[r])
        do {
            while (arr[x] < mid) x++
            while (arr[y] > mid) y--
            if (x <= y) {
                swap(arr,x,y)
                x++
                y--
            }
        } while (x <= y)

        _quickSort(arr, x, r)

        r = y
    }

}

function _insertSort(arr: number[], l:number, r:number) {
    let index = l

    // 找出最小值
    for (let i = l + 1; i <= r; i++) {
        if(arr[i] < arr[index]) index = i
    }

    for (let i = index; i > l; i--) {
        swap(arr,i,i - 1)
    }

    for (let i = l + 2; i <= r;i++) {
        let j = i
        while (arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1)
            j--
        }
    }

}


function quickSort(arr:number[],l:number,r:number) {
    _quickSort(arr, l, r)
    _insertSort(arr,l, r)
}




function sortArray(nums: number[]): number[] {
    quickSort(nums, 0, nums.length - 1)

    return nums

};