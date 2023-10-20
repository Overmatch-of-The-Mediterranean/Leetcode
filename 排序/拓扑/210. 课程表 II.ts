function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const q:number[] = []
    const indeg:number[] = Array(numCourses).fill(0)

    for(let i = 0;i < prerequisites.length;i++) {
        indeg[prerequisites[i][0]]++
    }

    for(let i = 0;i < numCourses;i++) {
        if(indeg[i] === 0) q.push(i)
    }

    const outdeg:number[][] = []

    for(let i = 0;i < prerequisites.length;i++){
        const temp = prerequisites[i]
        if(!outdeg[temp[1]]) {
            outdeg[temp[1]] = []
            outdeg[temp[1]].push(temp[0])
        } else {
            outdeg[temp[1]].push(temp[0])
        }
    }

    let result:number[] = []

    while(q.length !==0) {
        const item = q.shift()
        result.push(item)
        const arr = outdeg[item] || []
        for(let i = 0;i < arr.length;i++){
            indeg[arr[i]]--
            if(indeg[arr[i]]===0) {
                q.push(arr[i])
            }
        }
    }

    return result.length === numCourses ? result : []
};