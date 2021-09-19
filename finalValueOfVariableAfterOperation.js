//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function(operations) {
    let x = 0
    operations.forEach(operation => {
        if(operation[0] === '+' || operation[operation.length-1] === '+'){
            x++
        }else{
            x--
        }
    })
return x
};