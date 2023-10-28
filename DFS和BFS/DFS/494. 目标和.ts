const h:Map<number[],number> = new Map<number[],number>()

function dfs(index:number,target:number,nums: number[]){
    if(index === nums.length) return target === 0 ? 1 : 0

    

    if(h.get([index,target])) {
        return h.get([index,target])
    }

    let ans = 0
    // +
    ans += dfs(index + 1, target - nums[index], nums)
    // -
    ans += dfs(index + 1, target + nums[index], nums)
    h.set([index,target], ans)

    return ans
}

function findTargetSumWays(nums: number[], target: number): number {

    return dfs(0, target, nums)
};