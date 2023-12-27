function countPrimes(n: number): number {
    // 质数筛：
        // 如用2筛掉，4，6，8，10.....
        // 如用3筛掉，6，9，12，15....

        const primes:number[] = Array(n + 1).fill(0) 

        for(let i = 2; i * i < n;i++) {
            if(primes[i]) continue

            for(let j = i * 2;j < n;j += i){
                primes[j] = 1
            } 
        }


        let count = 0
        for(let i = 2;i < n;i++) {
            if(!primes[i]) count++
        }

        return count
};