function minRemoveToMakeValid(s: string): string {
    let str = ''
    let count = 0

    // 从左往右扫描一遍，去除无效右括号
    for(let i = 0;i < s.length;i++) {
        if(s[i] === '(' || s[i] !== ')') {
            if(s[i] === '(') count++
            str += s[i]
            continue
        } 

        if(count !== 0) {
            str += s[i]
            count--
        } 
    }

    let t = ''
    count = 0

    // 从右往左扫描，去除无效左括号
    for(let i = str.length - 1;i >= 0;i--) {
        if(str[i] === ')' || str[i] !== '(') {
            if(str[i] === ')') count++
            t = str[i] + t
            continue
        }

        if(count !== 0) {
            t = str[i] + t
            count--
        }

    }
    return t
};