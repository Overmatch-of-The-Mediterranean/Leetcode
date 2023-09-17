function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack:number[] = []

    for(let i = 0,j = 0;i < popped.length;i++) {
        
        while(j < pushed.length && (!stack.length || popped[i] !== stack[stack.length - 1])) {
            stack.push(pushed[j])
            j++
        }

        if(popped[i] !== stack[stack.length - 1]) return false
        
        stack.pop()

    }

    return true

};