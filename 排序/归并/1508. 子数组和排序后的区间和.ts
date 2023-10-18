class Heap<T = Data> { 
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
            return ((this.data[i] as Data).val <= (this.data[j] as Data).val)
        }else {
            return ((this.data[i] as Data).val >= (this.data[j] as Data).val)
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

class Data {
    i:number
    j:number
    val:number
    
    constructor(i:number, j:number,val:number){
        this.i = i
        this.j = j
        this.val = val
    }
}

function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const q = new Heap<Data>([], false)
    let ans = 0
    let mod = 1e9 + 7
    
    // 多路归并
    for(let i = 0;i < nums.length;i++) {
        q.insert(new Data(i,i,nums[i]))
    }

    for(let i = 1;i <= right;i++) {
        const num = q.remove() // 这相当于取多路指针指向的最小值

        if(i >= left) ans = (ans + num.val) % mod

        // 这相当于指针向后移动
        if(num.j + 1 < n) q.insert(new Data(num.i, num.j + 1, num.val + nums[num.j + 1]))
    }

    return ans

};