class Heap<T> { 
    data: T[] = []
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
            return (this.data[i][0] <= this.data[j][0])
        }else {
            return (this.data[i][0] >= this.data[j][0])
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



function getNumberOfBacklogOrders(orders: number[][]): number {
    const buy = new Heap([],true)

    const sell = new Heap([],false)

    for(let i = 0;i < orders.length;i++) {
        const order = orders[i]
        if(order[2] === 0){
            while(order[1] !== 0 && sell.size() && sell.peek()[0] <= order[0]){
                let cnt = Math.min(order[1], sell.peek()[1])
                sell.peek()[1] -= cnt
                order[1] -= cnt
                if(sell.peek()[1] === 0) sell.remove()
            }
            if(order[1] !== 0) buy.insert(order)
        } else {
            while(order[1] !== 0 && buy.size() && buy.peek()[0] >= order[0]){
                let cnt = Math.min(order[1], buy.peek()[1])
                buy.peek()[1] -= cnt
                order[1] -= cnt
                if(buy.peek()[1] === 0) buy.remove()
            }
            if(order[1] !== 0) sell.insert(order)
        }
    }

    let sum = 0
    let mod = 1000000007

    for(let i = 0;i < buy.data.length;i++) {
        sum = (sum + buy.data[i][1]) % mod
    }

    for(let j = 0;j < sell.data.length;j++){
        sum = (sum + sell.data[j][1]) % mod
    }

    return sum

};