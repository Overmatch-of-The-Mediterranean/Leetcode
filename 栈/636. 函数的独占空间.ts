function exclusiveTime(n: number, logs: string[]): number[] {

    let result:number[] = Array(n).fill(0)
    let ids:number[] = []
    let prev = 0

    for(let i = 0;i < logs.length;i++){
        const arr = logs[i].split(':')
        let id = Number(arr[0])
        let timeStamp = Number(arr[2])
        let type = arr[1]

        // 无论start还是end都是对栈顶元素进行运算
        result[ids[ids.length - 1]] += timeStamp - prev + Number((type === 'end'))
        prev = timeStamp + Number(type === 'end')
        if(type === 'start'){
            ids.push(id)
        } else {
            ids.pop()
        }
    }
    
    return result
};