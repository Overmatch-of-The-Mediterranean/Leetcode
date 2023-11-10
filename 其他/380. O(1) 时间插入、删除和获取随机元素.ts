class RandomizedSet {
    h:Map<number,number> = new Map<number, number>()
    arr:number[] = []
    constructor() {
        
    }

    insert(val: number): boolean {
        if(this.h.get(val) || this.h.get(val) === 0) return false

        this.h.set(val, this.arr.length)
        this.arr.push(val)
        
        return true
    }

    swap(arr:number[], i:number, j:number){
        
        this.h.set(arr[i], j)
        this.h.set(arr[j], i)

        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    remove(val: number): boolean {
        if(this.h.get(val) === undefined) return false
        // 删除元素前，先将要删除的元素交换到数组末尾，同时h中记录的数组下标也需要交换
        this.swap(this.arr, this.h.get(val), this.arr.length - 1)
        this.arr.pop()
        this.h.delete(val)

        return true
    }

    getRandom(): number {
        let index = Math.floor(Math.random() * this.arr.length)
        return this.arr[index]
    }
}