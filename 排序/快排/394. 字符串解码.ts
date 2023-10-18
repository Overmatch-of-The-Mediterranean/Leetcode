function decodeString(s: string): string {
    let str = ''
    let i = 0
    while(s[i]) {

        // if是递归的终止条件
        if(s[i] < '0' || s[i] > '9') {
            str += s[i]
            i++
        } else {
            let num = 0
            // 统计次数
            while(s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (s[i++].charCodeAt(0) - '0'.charCodeAt(0))
            }
            i++
            let l = i
            let r = i
            let cnt = 1
            while(cnt) {
                r++
                if(s[r] === '[') cnt++
                else if (s[r] === ']') cnt--
            }

            // 每次取得[]中的内容，进行递归
            let tmp = decodeString(s.substring(l, r))
            
            while(num--) str += tmp

            // r向后一位，用来判断是否已经遍历完此次decodeString中的s
            i = r + 1
            
        }
    }
    return str
};