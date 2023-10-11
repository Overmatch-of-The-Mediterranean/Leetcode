class UnionSet {
    fa:number[] = []

    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
        }
    }

    get(x:number){
        return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
    }

    merge(a:number, b:number){
        this.fa[this.get(a)] = this.get(b)
    }

}

function equationsPossible(equations: string[]): boolean {

    const u = new UnionSet(26)

    // 1.处理==情况，将该情况的两个变量连接起来，相等的构成集合
    for(let i = 0;i < equations.length;i++) {
        const equation = equations[i]
        if(equation[1] == '!') continue
        const a = equation[0].charCodeAt(0) - 'a'.charCodeAt(0)
        const b = equation[3].charCodeAt(0) - 'a'.charCodeAt(0)
        u.merge(a, b)
    }

    // 2.处理!=情况，若该情况下，两个变量的是在同一个集合中，则矛盾，返回false
    for(let i = 0;i < equations.length;i++) {
        const equation = equations[i]
        if(equation[1] == '=') continue
        const a = equation[0].charCodeAt(0) - 'a'.charCodeAt(0)
        const b = equation[3].charCodeAt(0) - 'a'.charCodeAt(0)
        if(u.get(a) === u.get(b)) return false
    }

    return true
};