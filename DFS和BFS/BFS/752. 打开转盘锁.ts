class Data {
    val:string
    k:number
    constructor(val:string, k:number){
        this.val = val
        this.k = k
    }
}

function getStr(str:string, i, z){
    let s:string
    let arr:string[] = []
    switch(z) {
        case 0:
            s = str[i] === '0' ? '9' : Number(str[i]) - 1 + ''
            arr = str.split('')
            arr[i] = s
            s = arr.join('') 
            break
        case 1:
            s = str[i] === '9' ? '0' : Number(str[i]) + 1 + ''
            arr = str.split('')
            arr[i] = s
            s = arr.join('') 
            break
    } 

    return s
}

function openLock(deadends: string[], target: string): number {
    const q:Data[] = []
    const h = new Map<string,number>()

    for(let i = 0;i < deadends.length;i++) h.set(deadends[i],1)
    if(h.get('0000')) return -1

    q.push(new Data('0000',0))
    h.set('0000', 1)
    
    while(q.length) {
        const cur = q.shift()
        if(cur.val === target) return cur.k
        for(let i = 0;i < 4;i++) {
            for(let j = 0;j < 2;j++) {
                let t = getStr(cur.val, i, j)
                if(h.get(t)) continue
                h.set(t, 1)
                q.push(new Data(t, cur.k + 1))
            }
        }
        
    }


    return -1
};