function candy(ratings: number[]): number {
    const l:number[] = []
    const r:number[] = []

    // 从左向右扫描一遍，只比较当前的数和前一位的大小
    for(let i = 0, j = 1;i < ratings.length;i++) {
        if(i && ratings[i] > ratings[i-1]) j++
        else j = 1
        l[i] = j
    }


    // 从右向左扫描一遍，只比较当前的数和后一位的大小
    for(let i = ratings.length - 1, j = 1;i >= 0;i--) {
        if(i < ratings.length - 1 && ratings[i] > ratings[i+1]) j++
        else j = 1
        r[i] = j
    }

    let ans = 0
    for(let i = 0;i < ratings.length;i++) ans += Math.max(l[i], r[i])

    return ans
};