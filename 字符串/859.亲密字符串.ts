function buddyStrings(s: string, goal: string): boolean {

    function isRepeat(s:string):boolean{
        let count:number[] = new Array(26).fill(0)
        for(let i = 0;i < s.length;i++) {
            let index = s.charCodeAt(i) - 'a'.charCodeAt(0)
            count[index]++
            if(count[index] > 1) {
                return true
            }
        }
        return false
    }

    if(s.length !== goal.length) return false

    // 排除类似 aaa，aaa 与 aabc，aabc这样的字符串
    if(s === goal) return isRepeat(s)
    

    let i = 0
    let j = 0
    // 查找第一个不相同的字符
    while(i < s.length && s[i] === goal[i]) i++

    // 查找第二个不相同的字符
    j = i + 1
    while(j < s.length && s[j] === goal[j]) j++

    if(j === s.length) return false

    let k = j + 1

    // 检查第三部分是否相等
    while(k < s.length && s[k] === goal[k]) k++
    if(k !== s.length) return false

    // 比较对角元素是否相等
    if(s[i] !== goal[j]) return false
    if(s[j] !== goal[i]) return false
    
    return true
};