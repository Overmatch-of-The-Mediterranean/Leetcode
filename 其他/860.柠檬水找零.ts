function lemonadeChange(bills: number[]): boolean {
    if(bills[0] !== 5) return false
    let fiveCnt = 1
    let tenCnt = 0
    let twCnt = 0
    for(let i = 1;i < bills.length;i++) {
        if(bills[i] === 5) {
            fiveCnt++
            continue
        }

        if(bills[i] === 10){
            if(fiveCnt !== 0){
                fiveCnt--
                tenCnt++
            } else {
                return false
            }

        } 

        if(bills[i] === 20) {    
            if(tenCnt && fiveCnt){
                tenCnt--
                fiveCnt--
                twCnt++
            } else if(fiveCnt >= 3){
                fiveCnt -= 3
                twCnt++
            } else {
                return false
            }
        }
    }
    return true
};