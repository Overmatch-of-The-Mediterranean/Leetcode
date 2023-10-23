function mySqrt(x: number): number {
    let head = 0
    // 因为结果可能是x本身, 所以需要+1, 对于JS不+1也可以，当mid无限接近于x时，系统会自动取整
    // 如，不+1时,0.9999999999999999的下一次就会变成1
    let tail = x
    let mid:number
    for(let i = 0;i < 100;i++) {
        mid = (head + tail) / 2
        if(mid * mid <= x) head = mid
        else tail = mid
    }
    return Math.floor(head)
};