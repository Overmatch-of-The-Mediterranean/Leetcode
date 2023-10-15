class Heap<T> { 
    private data: T[] = []
    private length: number = 0
    private isMax:boolean

    constructor(arr:T[],isMax:boolean = true){
        this.isMax = isMax
        if(arr.length === 0) return
        this.buildHeap(arr)
    }

    // 交换两个元素
    private swap(i: number, j: number) { 
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
        
     }

     compare(i:number,j:number){ 
        if(this.isMax) {
            return (this.data[i] <= this.data[j])
        }else {
            return (this.data[i] >= this.data[j])
        }
      }

    // 插入
    insert(value: T) { 
        // 将插入的元素放在数组的最后面
        this.data.push(value)
        this.length++

        // 上滤操作
        this.heapify_up()
     }

    // 删除
    remove() {

        const value = this.peek()
        this.swap(0, this.length - 1)
        this.data.pop()
        this.length--
        this.heapify_down()
        
        return value

    }

     // 上滤
     private heapify_up (){
        let index = this.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)

            if (this.compare(index,parentIndex)) { 
                break
            }

            this.swap(index, parentIndex)
            index = parentIndex
         }
     }

    // 取出最大值
    extract(): T | undefined { 
        if(this.length === 0) return undefined
        if(this.length === 1) { 
            this.length--
            return this.data.pop()
        }

        const topValue = this.data[0]
        this.data[0] = this.data.pop()!
        this.length--

        this.heapify_down()

        return topValue

    }

    // 下滤
    private heapify_down (num:number = 0){

        let index = num
        
        while(2 * index + 1 < this.length) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let largeIndex = leftChildIndex
    
            if(rightChildIndex < this.length && this.compare(leftChildIndex,rightChildIndex) ) { 
                largeIndex = rightChildIndex
            }
    
            if(this.compare(largeIndex,index)) {
                break
            }
    
            this.swap(index,largeIndex)
            index = largeIndex
        }
    }
    
    peek(): T | undefined {
        return this.data[0]
    }

    
    size(): number { 
        return this.length
    }
    
    isEmpty(): boolean {
        return this.length === 0
     }

     // 原地建堆
     buildHeap(arr:T[]){
        this.data = arr
        this.length = arr.length

        // 获取第一个非叶子节点
        let index = this.length - 1
        const lastNodeIndex = Math.floor((index - 1) / 2)

        for(let i = lastNodeIndex; i >= 0; i--) {
            this.heapify_down(i)
        }
     }

    
}

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

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    // 将有连通性的索引放在同一集合中，如[1, 2],[2, 3]则1，2，3可以放在同一集合中
    // 将同一集合中的元素进行排序，然后依次输出出来

    const n = s.length
    const u = new UnionSet(n)

    const heaps:Heap<string>[] = []

    for(let i = 0;i < n;i++) {
        heaps.push(new Heap<string>([],false))
    } 

    
    for(const pair of pairs) {
        u.merge(pair[0],pair[1])
    }

    // 将每个集合中的元素存入对应的小顶堆中去
    for(let i = 0;i < n;i++) {
        heaps[u.get(i)].insert(s[i])
    }

    // 每次循环，查找该索引下的元素在那个集合对应的堆中
    let str = ''
    for(let i = 0;i < n;i++) {
        str += heaps[u.get(i)].remove()
    }

    return str
};