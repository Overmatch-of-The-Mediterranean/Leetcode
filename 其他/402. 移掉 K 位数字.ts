function removeKdigits(num: string, k: number): string {
    if(k >= num.length) return '0'

    // 单调递增
    let ret:string[] = []

    for(let i = 0;i < num.length;i++) {
        while(ret.length && k && num[i] < ret[ret.length-1]) {
            ret.pop()
            k--
        }
        ret.push(num[i])
    }

    // 移除剩下没有移除的数字
    ret = ret.slice(0,ret.length - k)

    // 判断是否只包含0
    if(!/[1-9]+/.test(ret.join(''))) return "0"

    // 去除前缀0
    let index = 0
    while(ret[index] === '0') index++

    ret = ret.slice(index,ret.length)

    return ret.join('')

};