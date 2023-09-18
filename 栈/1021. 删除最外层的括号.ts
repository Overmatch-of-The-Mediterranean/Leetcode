function removeOuterParentheses(s: string): string {
    
    let str = ''
    let count = 0
    let pre = 0
    for(let i = 0;i < s.length;i++) {
        if(s[i] === '(') {
            count++
        } else {
            count--
        }

        if(count === 0) {
            str += s.substring(pre + 1, i)
            pre = i + 1
        }
        
    }

    return str
};