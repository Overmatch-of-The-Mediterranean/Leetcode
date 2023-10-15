var rand10 = function() {
    
    // 拒绝采样算法
    // 1~40采样，41~49拒绝
    // 1~40取模后，0~9出现的概率相同，每个数出现的概率是 4 / 49
    let index = 0
    do {
        let row = rand7()
        let col = rand7()
        index = row + (col - 1) * 7
    } while(index > 40)

    return 1 + index % 10

};