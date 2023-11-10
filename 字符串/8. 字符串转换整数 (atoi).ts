function myAtoi(s: string): number {
    const MAX = Math.abs(1 << 31) - 1
    const max = Math.floor(MAX / 10)
    const d = MAX % 10
    let flag = 1
    let index = 0
    while(s[index] === ' ') index++
    if(s[index] === '-') flag = -1,index++
    else if(s[index] === '+') index++

    let num = 0
    
    for(let i = index;i < s.length;i++) {
        console.log('s',s[i])
        if(s[i] > '9' || s[i] < '0') break
        // 32位二进制最大值2147483647
        // 32位二进制最小值-2147483648
        // 负数也通用，32位二进制，最大值，最小值的绝对值相差为1，(s[i].charCodeAt(0) - '0'.charCodeAt(0))) > d正好容错
        if(num > max || (num === max && (s[i].charCodeAt(0) - '0'.charCodeAt(0))) > d) {
            if(flag === 1) {
                return MAX
            }
            return (MAX + 1) * flag
        }

        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0))


    }
    return num * flag
};