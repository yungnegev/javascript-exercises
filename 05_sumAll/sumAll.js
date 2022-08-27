const sumAll = function(start, end) {

    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
        } 
    answer = ans.reduce((a, b) => a + b, 0)
    
    if(start && end === NaN){
        return 'ERROR'
    }

    return answer
};

// Do not edit below this line
module.exports = sumAll;
