function smallestSubsequence(s: string): string {
    const ret:string[] = []
    const h = new Map<string, number>()

    // 用来记录单调栈中是否有该字符
    const flag = new Map<string,number>()

    // 统计每个字符出现的次数
    for(let i = 0;i < s.length;i++) {
        if(!h.get(s[i])) h.set(s[i], 1)
        else h.set(s[i], h.get(s[i]) + 1)
    }


    for(let i = 0;i < s.length;i++) {
        // 该字符统计过后，直接跳过
        if(!flag.get(s[i])) {
            // 出栈的条件除了s[i] < ret[ret.length-1]外，还需要栈顶字符在后续中还存在，因为要满足题目中每个字母只出现一次
            while(ret.length && h.get(ret[ret.length-1]) && s[i] < ret[ret.length-1]) {
                flag.delete(ret[ret.length-1])
                ret.pop()
            }
            flag.set(s[i], 1)
            ret.push(s[i])

        }

        h.set(s[i], h.get(s[i]) - 1)
    }

    return ret.join('')
};