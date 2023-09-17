function backspaceCompare(s: string, t: string): boolean {
    let s1:string[] = []
    let s2:string[] = []

    for(let i = 0;i < s.length;i++){
        if(s[i] === '#') {
            s1.pop()
            continue
        }
        s1.push(s[i])
    }

    for(let i = 0;i < t.length;i++){
        if(t[i] === '#'){
            s2.pop()
            continue
        }
        s2.push(t[i])
    } 

    if(s1.length !== s2.length) return false
    

    while(s1.length) {
        if(s1.pop() !== s2.pop()) return false
    }

    return true
};