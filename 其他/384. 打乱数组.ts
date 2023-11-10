class Solution {
    nums:number[]
    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    swap(arr:number[],i:number,j:number) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    shuffle(): number[] {
        let ret:number[] = [...this.nums]

        for(let i = 0;i < ret.length;i++) {
            this.swap(ret, i, Math.floor(Math.random() * ret.length))
        }
        return ret
    }
}