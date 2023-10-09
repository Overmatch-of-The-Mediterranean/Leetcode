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
            return ((this.data[i][0] + this.data[i][1]) <= (this.data[j][0] + this.data[j][1]))
        }else {
            return ((this.data[i][0] + this.data[i][1]) >= (this.data[j][0] + this.data[j][1]))
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

    // peekLast(): T | undefined {
    //     return this.data[this.length - 1]
    // }
    
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

function cmp (a:number[], b:number[]) {
    return (a[0] + a[1]) > (b[0] + b[1])
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const heap = new Heap<number[]>([],true)

    for(let i = 0;i < nums1.length;i++) {
        for(let j = 0;j<nums2.length;j++) {
            
            const arr= [nums1[i],nums2[j]]
            if(heap.size() === 0) {
                heap.insert(arr)
                continue
            }
            if(cmp(heap.peek(), arr) || heap.size() < k){
                heap.insert(arr)
                if(heap.size() > k) console.log(heap.remove())
            } else {
                break
            }
        }
    }

    return heap.data
};