function convertToBase7(num: number): string {
    if(!num) return "0"
    let ret = ''
    let flag = (num < 0)
    num = Math.abs(num)

    while(num) {
        ret = (num % 7) + ret + ''

        num = Math.floor(num / 7)

    }

    if(flag) ret = '-' + ret
    return ret
};