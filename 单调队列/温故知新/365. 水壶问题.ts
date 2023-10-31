function getNext(i:number, x:number, X:number, y:number, Y:number){
    let delCap = 0
    switch(i) {
        case 0: return [0, y] // 将第一个水壶清空的状态
        case 1: return [x, 0] // 将第二个水壶清空的状态
        case 2: 
            delCap = Math.min(x, Y - y)
            return [x - delCap, y + delCap] // 将第一个水壶倒入第二个水壶后的状态
        case 3:
            delCap = Math.min(X - x, y)
            return [x + delCap, y - delCap] // 将第二个水壶倒入第一个水壶后的状态
        case 4: return [X, y] // 将第一个水壶灌满后的状态
        case 5: return [x, Y] // 将第二个水壶灌满后的状态
    }
}



function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {

    const h = new Map<string,number>()
    h.set([0, 0].join(''), 1)

    const q:number[][] = [[0, 0]]

    while(q.length) {
        const cur = q.pop()
        if(cur[0] + cur[1] === targetCapacity) return true

        // 每种状态所拓展出的所有状态
        for(let i = 0;i < 6;i++) {
            let next = getNext(i, cur[0], jug1Capacity, cur[1], jug2Capacity)

            if(h.get(next.join(''))) continue
            h.set(next.join(''), 1)
            q.push(next)
            
        }
    }

    return false

};