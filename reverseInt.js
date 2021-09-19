//https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    
    const stringOfX = x+"";
    let revStringOfX = "";
    let output
    
    for(let i = stringOfX.length-1; i > -1; i--){
        revStringOfX += stringOfX[i]
    }
    
    if(x < 0){
        output = parseInt("-"+revStringOfX)
    }else{
        output = parseInt(revStringOfX)
    }
    
    if(-Math.pow(2,31) <= output && output <= Math.pow(2,31)-1){
        return output
    }
    
    return 0
};