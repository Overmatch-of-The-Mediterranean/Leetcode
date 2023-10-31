function dfs(s:string, k:number, index:number, ret:string[]){
    if(index >= s.length) return
    if(k === 4) {
        let num = 0
        // 判断最后一个点后的数字是否合法
        if(s.length - index > 1 && s[index] === '0') return
        for(let i = index;i < s.length;i++) {
            num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
            if(num > 255) return
            
        }

        ret.push(s)
        return

    }

    for(let i = index, num = 0;i < s.length;i++) {
        num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)

        if(num > 255) return
        if(i - index >= 1 && s[index] === '0') return
        let arr = s.split('')
        arr.splice(i + 1, 0 , '.')
        s = arr.join('')

        dfs(s, k + 1, i + 2, ret)
        s = s.slice(0, i+1) + s.slice(i+2)

    }
}

function restoreIpAddresses(s: string): string[] {

    let ret:string[] = []

    // 第二个参数代表第几个点，第三个参数代表，点可以放的开始位置
    dfs(s, 1, 0, ret)

    return ret
};