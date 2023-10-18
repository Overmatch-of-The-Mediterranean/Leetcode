
var deepestLeavesSum = function(root) {
    let ansObj = {
        ans: 0,
        max_k: 0
    }

    function getResult(root, k, ansObj) {
        if(!root) return null
        

        if(k === ansObj.max_k) ansObj.ans += root.val

        if(k > ansObj.max_k) {
            ansObj.max_k = k
            ansObj.ans = root.val
        }

        getResult(root.left, k + 1, ansObj)
        getResult(root.right, k + 1, ansObj)
    }

    getResult(root, 1 , ansObj)

    return ansObj.ans
    
    
};