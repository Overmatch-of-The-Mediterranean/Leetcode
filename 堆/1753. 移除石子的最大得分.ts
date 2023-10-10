

function maximumScore(a: number, b: number, c: number): number {

    if(a > b) {
        let temp = a
        a = b
        b = temp
    }
    if(a > c) {
        let temp = a
        a = c
        c = temp
    }
    if(b > c) {
        let temp = b
        b = c
        c = temp
    }

    let ans = 0
    // 1.用a消去，c比b多出的部分
    let cnt = Math.min(c- b, a)
    a -= cnt
    c -= cnt
    ans += cnt


    // 2.如果a有剩余，a平分给b，c消去
    if(a != 0) {
        if(a % 2 === 1) a -= 1
        b -= a/2
        c -= a/2
        ans += a
    }

    ans += b


    return ans
};