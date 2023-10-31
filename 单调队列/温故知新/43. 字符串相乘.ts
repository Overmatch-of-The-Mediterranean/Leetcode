function multiply(num1: string, num2: string): string {

    let a:string[] = Array(num1.length).fill(0)
    let b:string[] = Array(num2.length).fill(0)

    // 利用到了大数计算
    let ret:number[] = Array(a.length + b.length - 1).fill(0)
    for(let i = 0;i < num1.length;i++) a[num1.length - i - 1] = num1[i]
    for(let i = 0;i < num2.length;i++) b[num2.length - i - 1] = num2[i]

    for(let i = 0;i < a.length;i++) {
        for(let j = 0;j < b.length;j++) {
            ret[i + j] += (a[i].charCodeAt(0) - '0'.charCodeAt(0)) * (b[j].charCodeAt(0) - '0'.charCodeAt(0))
        }
    }

    // 处理进位
    for(let i = 0;i < ret.length;i++) {
        if(ret[i] < 10) continue
        if(i + 1 === ret.length) ret.push(0)

        ret[i + 1] += Math.floor(ret[i] / 10)
        ret[i] %= 10
    }

    // 去除前缀0
    while(ret.length > 1 && ret[ret.length-1] === 0) ret.pop()

    let str = ''
    for(let i = ret.length - 1;i >= 0;i--) {
        str += ret[i]
    }


    return str
};