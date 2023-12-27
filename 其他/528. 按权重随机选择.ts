class Solution {
    sum:number[] = []
    constructor(w: number[]) {
        this.sum = w
        // 前缀和数组
        for(let i = 1;i < w.length;i++) {
            this.sum[i] += this.sum[i-1]
        }
    }


    pickIndex(): number {
        const k = Math.random() * this.sum[this.sum.length-1]

        let l = 0
        let r = this.sum.length-1
        
        while(l < r) {
            let mid = Math.floor((l + r) / 2)
            if(this.sum[mid] <= k) l = mid + 1
            else r = mid
        }

        return l
    }
}