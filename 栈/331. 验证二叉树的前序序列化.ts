function isValidSerialization(preorder: string): boolean {
    let stack:string[] = []
    for(let i = 0,j=0;i < preorder.length;i = j + 1) {
        j = i

        while(j < preorder.length && preorder[j] !== ',') j++

        stack.push(preorder.substring(i,j))

        let last = stack.length - 1
        while(stack.length >= 3 && stack[last] === '#' && stack[last - 1] === '#') {
            stack[last - 2] = '#'
            stack.pop()
            stack.pop()
            last = stack.length - 1
        }

        if(stack.length === 2 && stack[1] === '#' && stack[0] === '#') return false
    }

    return stack.length === 1 && stack[0] === '#'
};