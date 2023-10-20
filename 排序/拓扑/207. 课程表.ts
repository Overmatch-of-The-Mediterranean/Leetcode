function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if(prerequisites.length === 0) return true
    const q:number[] = []

    // 记录每个点的入度
    let indeg:number[] = Array(numCourses).fill(0)
    for(let i = 0; i < prerequisites.length;i++) {
        indeg[prerequisites[i][0]]++
    }

    // 将入度为0的节点入队
    for(let i = 0;i < numCourses;i++) {
        if(indeg[i] === 0) q.push(i)
    }
    // 记录每个节点指向的其他节点
    let outdeg: number[][] = []
    for(let i = 0;i < prerequisites.length;i++) {
        const temp:number[] = prerequisites[i]
        if(!outdeg[temp[1]]) {
            outdeg[temp[1]] = []
            outdeg[temp[1]].push(temp[0])
        } else {
            outdeg[temp[1]].push(temp[0])
        }
        
    }
    let cnt = 0
    while(q.length !==0) {
        const item = q.shift()
        cnt++
        const arr = outdeg[item] || []
        for(let i = 0;i < arr.length;i++) {
            indeg[arr[i]]--
            if(indeg[arr[i]] === 0) {
                q.push(arr[i])
            }
        }
    }
    
    return cnt === numCourses
};