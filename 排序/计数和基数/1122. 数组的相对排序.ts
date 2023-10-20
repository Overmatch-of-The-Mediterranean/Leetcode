function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    // 使用计数排序
    const cnt:number[] = Array(1001).fill(0)
    const result:number[] = []

    for(let i = 0;i < arr1.length;i++) {
        cnt[arr1[i]] += 1
    }

    for(let i = 0;i < arr2.length;i++) {
        while(cnt[arr2[i]]--) result.push(arr2[i])
        cnt[arr2[i]] = 0
    }
    

    for(let i = 0;i < 1001;i++) {
        while(cnt[i]--) result.push(i)
    }
    return result
};