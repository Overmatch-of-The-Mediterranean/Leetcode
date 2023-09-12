function isHappy(n: number): boolean {

    function getNext(x:number){
        let z = 0
        while(x) {
            z += (x % 10) * (x % 10)
            x = Math.floor(x / 10)
        }
        return z
    }

    let p = n
    let q = n
    do {

        p = getNext(p)
        q = getNext(getNext(q))

    } while(p != q && q!= 1)

    return q === 1
};