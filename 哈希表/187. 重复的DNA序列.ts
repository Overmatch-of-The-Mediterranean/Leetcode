function findRepeatedDnaSequences(s: string): string[] {
    const h = new Map<string, number>()

    for(let i = 0;i < s.length - 9;i++) {
        if(h.get(s.substring(i, i+10)))  {
           h.set(s.substring(i, i+10),h.get(s.substring(i, i+10)) + 1)
           continue
        }
        h.set(s.substring(i, i+10), 1)
    }

    let ret:string[] = []
    for(const x of h) {
        if(x[1] > 1) ret.push(x[0])
    }

    return ret
};