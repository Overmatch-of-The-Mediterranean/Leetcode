function nthSuperUglyNumber(n: number, primes: number[]): number {
    const data:number[] = [1]
    const p:number[] = Array(primes.length).fill(0)

    while(data.length != n){
        let ans = data[p[0]] * primes[0]
        
        for(let i = 1;i < primes.length;i++){
            ans = Math.min(ans, data[p[i]] * primes[i])
        }

        for(let i = 0;i < primes.length;i++) {
            if(ans === data[p[i]] * primes[i]) p[i]++
        }

        data.push(ans)
    }

    return data.pop()
};