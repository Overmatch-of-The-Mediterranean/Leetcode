function maxProduct(words: string[]): number {
    const mark:number[] = []

    for(let i = 0;i < words.length;i++) {
        // 将每个单词转换成26位二进制数字
        for(const w of words[i]) {
            mark[i] |= 1 << w.charCodeAt(0) - 'a'.charCodeAt(0)
        }
    }

    let ans = 0

    for(let i = 0;i < words.length;i++) {
        for(let j = i+1;j < words.length;j++) {
            // 两个单词进行与运算，判断是否有重复的字母
            if((mark[i] & mark[j]) === 0) {
                ans = Math.max(ans, words[i].length * words[j].length)
            }
        }
    }
    return ans
};