
function dfs(index: number, target:number, buff:number[], ret:number[][],candidates: number[]){
    if(target < 0) return
    if(target === 0) {
        ret.push(buff.slice(0))
        return
    }
    if(index === candidates.length) return

    // 不选该元素
    dfs(index + 1, target, buff, ret, candidates)

    // 选择该元素, 继续取该元素开始dfs
    buff.push(candidates[index])
    dfs(index, target - candidates[index], buff, ret, candidates)
    buff.pop()


}

function combinationSum(candidates: number[], target: number): number[][] {
    let ret:number[][] = []

    dfs(0, target, [], ret, candidates)

    return ret
};