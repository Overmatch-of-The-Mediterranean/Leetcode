function calculate(s: string): number {

    // 比较优先级
    function level(op:string):number{
        switch(op){
            case '@': return -1
            case '+':
            case '-': return 1
            case '*':
            case '/': return 2
        }
        return 0
    }

    // 计算
    function calc (a:number, op:string, b:number):number{
        switch(op){
            case '+': return a + b
            case '-': return a - b
            case '*': return a * b
            case '/': return Math.floor(a / b)
        }
    }

    // 设置两个栈，一个存放数字，一个存放操作符
    const num:number[] = []
    const ops:string[] = []
    s += '@'
    let n = 0
    for(let i = 0;i < s.length;i++){
        if(s[i] === ' ') continue
        if(level(s[i]) === 0) {
            n = n * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0))
            continue
        }
        num.push(n)
        n = 0

        // 若s[i]为操作符且权重<=ops的栈顶元素，则计算
        while(ops.length && level(s[i]) <= level(ops[ops.length - 1])){
            const b = num.pop()
            const a = num.pop()
            num.push(calc(a, ops.pop(), b))
        }

        ops.push(s[i])
    }

    return num.pop()
};