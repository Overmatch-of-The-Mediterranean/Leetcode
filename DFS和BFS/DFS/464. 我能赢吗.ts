// 记忆化，减少重复计算速度
const h = new Map<number, boolean>()

// 寻找是否有一种先出手能赢的盘局
function dfs(mask:number, maxChoose:number, desiredTotal:number) {
    if(h.get(mask) !== undefined) return h.get(mask)
    for(let i = 1; i <= maxChoose;i++) {
        if(mask & (1 << i)) continue

        // if里的dfs相当于自己选完数字，就该对手选了，之所以用!取反，是因为对手要是为false了，那我就是true
        if(i >= desiredTotal || !dfs(mask | (1 << i), maxChoose, desiredTotal - i)) {
            h.set(mask, true)
            return true
        }

    }
    h.set(mask, false)
    return false
}

function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {


    // 用二进制数记录作为标志，记录数字是否可选
    let mask = 0
    if(maxChoosableInteger*(maxChoosableInteger+1)/2 < desiredTotal) return false
    h.clear()
    return dfs(mask, maxChoosableInteger, desiredTotal)


};