function longestSubstring(s: string, k: number): number {

    // 合法的字符串肯定不含有不合法的字符，统计不合法字符的位置，然后由不合法的位置分割字符串
    const h = new Map<string, number>()
    const splits:number[] = []

    // 统计每个字符出现的次数
    for(let i = 0;i < s.length;i++) {
        h.get(s[i]) ? h.set(s[i], h.get(s[i]) + 1) : h.set(s[i], 1) 
    }

    // 统计不和要求的字符所在位置
    for(let i = 0;i < s.length;i++) {
        if(h.get(s[i]) < k) splits.push(i)
    }
    splits.push(s.length)

    if(splits.length === 1) return s.length

    let pre = 0, ans = 0

    for(let i = 0;i < splits.length;i++) {
        if(splits[i] - pre >= k) {
            ans = Math.max(ans, longestSubstring(s.substring(pre, splits[i]), k))
        }

        pre = splits[i] + 1
    }

    return ans
};