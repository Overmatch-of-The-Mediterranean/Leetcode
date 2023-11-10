function trailingZeroes(n: number): number {
    let m = 5, cnt = 0

    // 本题相当于计算每个数中，因子有多少个5五，统计因子5的总数量
    // n / 5，每五个数字就有一个中含有因子5
    // 针对于5的n次方的数字，其因子有n个5
    // 所以m每次*5，是为了如下这种
    // 1...5...10...25...30，
    // 第一次 / 5，25则少漏掉一次
    // 之后除25，将漏掉的次数补上 
    while(n / m) {
        cnt += Math.floor(n / m)
        m *= 5
    }
    return cnt
};