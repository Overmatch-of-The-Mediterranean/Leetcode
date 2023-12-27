function hammingDistance(x: number, y: number): number {
    x ^= y
    let count = 0
    
    while(x) {
        x = x & (x - 1)
        count++
        
    }

    return count
    
};