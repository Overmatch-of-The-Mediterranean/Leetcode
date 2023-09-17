function calPoints(operations: string[]): number {
    
    let stack:number[] = [] 

    for(let i = 0;i < operations.length;i++){
        if(operations[i] === '+'){
            let a = stack.pop()
            let b = stack[stack.length - 1]
            stack.push(a)
            stack.push(a + b)
        } else if(operations[i] === 'D'){
            stack.push(stack[stack.length - 1] * 2)
        } else if(operations[i] === 'C') {
            stack.pop()
        } else {
            stack.push(Number(operations[i]))
        }
    }

    const sum = stack.reduce((prev,cur)=>{
        return prev + cur
    },0)

    return sum

};