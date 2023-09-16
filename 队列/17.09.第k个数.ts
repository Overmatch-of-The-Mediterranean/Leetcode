function getKthMagicNumber(k: number): number {
    let data:number[] = [1]

    let p3 = 0
    let p5 = 0
    let p7 = 0

    while(data.length < k){
        let ans = 3 * data[p3]
        ans = Math.min(ans,5 * data[p5])
        ans = Math.min(ans,7 * data[p7])

        if(ans === 3 * data[p3]) p3++
        if(ans === 5 * data[p5]) p5++
        if(ans === 7 * data[p7]) p7++

        data.push(ans)
    }
    return data[k-1]

};