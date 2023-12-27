class Solution {
    n:number = 0
    head
    constructor(head: ListNode | null) {
        this.head = head
        let p = head
        while(p) {
            p = p.next
            this.n++
        }
    }

    getRandom(): number {
        let ran = Math.floor(Math.random() * this.n)
        let p = this.head
        while(ran--) {
            p = p.next
        }

        return p.val
    }
}