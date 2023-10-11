class UnionSet {
    fa:number[] = []
    cnt:number[] = []
    constructor(n:number){
        for(let i = 0;i < n;i++) {
            this.fa[i] = i
            this.cnt[i] = 1
        }
    }

    get(x:number){
        return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
    }

    merge(a:number, b:number){
        if(this.get(a) === this.get(b)) return
        // 将a所在树的节点数，加在b所在树的跟结点上
        this.cnt[this.get(b)] += this.cnt[this.get(a)] 
        this.fa[this.get(a)] = this.get(b)
    }

}

function longestConsecutive(nums: number[]): number {
    // map记录数值在数组中的索引，merge的时候，通过索引连接
    const map = new Map<number, number>()
    const n = nums.length
    const u = new UnionSet(n)

    for(let i = 0;i < n;i++) {
        const x = nums[i]
        
        if(map.get(x) === undefined ? false : true) continue

        // 处理数x前面的那个数
        if(map.get(x - 1) === undefined ? false : true) {
            u.merge(i ,map.get(x - 1))
        }

        // 处理数x后面的那个数
        if(map.get(x + 1) === undefined ? false : true){
            u.merge(i, map.get(x + 1))
        }

        map.set(x, i)
    }

    // 找出最长连接的个数
    let ans = 0
    for(let i = 0;i < n;i++) {
        if(u.get(i) === i && u.cnt[i] > ans) ans = u.cnt[i]
    }

    return ans

};