function dfs(ret, n:number, buff:number[], cnt:number, k:number) {
    if(cnt === k) {
        ret.push([...buff])
        return
    }

    for(let i = 1;i <= n;i++) {
        if(buff.length && i <= buff[buff.length-1]) continue
        buff.push(i)
        dfs(ret, n, buff, cnt + 1, k)
        buff.pop()
    }

}

function combine(n: number, k: number): number[][] {
    let ret = []
    const buff:number[] = []
    dfs(ret, n, buff, 0, k)
    return ret
};