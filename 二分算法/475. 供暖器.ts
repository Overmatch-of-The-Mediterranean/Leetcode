
function binarySearch (heaters:number[], target:number){
    let head = 0
    let tail = heaters.length - 1
    let mid:number
    while(head < tail) {
        mid = Math.floor((head + tail) / 2)
        if(heaters[mid] < target) head = mid + 1
        else tail = mid
    }
    return head
}

function findRadius(houses: number[], heaters: number[]): number {

    heaters.sort((a,b) => a - b)

    let ans = -1
    for(let i = 0;i < houses.length;i++) {
        // 在heaters里找出第一个大于houses[i]的位置
        let j = binarySearch(heaters, houses[i])

        let a = Math.abs(heaters[j] - houses[i])

        let b = j > 0 ? houses[i] - heaters[j - 1] : a + 1

        // 找出每个房子距离最近的暖炉，从每个房子和暖炉的距离中取最大值
        ans = Math.max(ans, Math.min(a,b))
    }
    return ans
};