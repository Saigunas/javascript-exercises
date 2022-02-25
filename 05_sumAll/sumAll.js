const sumAll = function(n1, n2) {
    if(typeof n1 !== 'number'|| typeof n2 !== 'number') {
        return "ERROR";
    }
    if(n1 < 0 || n2 < 0) {
        return "ERROR";
    }

    let sum = 0;
    
    if(n1 > n2) {
        for(let i = n2; i <= n1; i++){
            sum = sum + i;
        }
        return sum;
    }

    for(let i = n1; i <= n2; i++){
        sum = sum + i;
    }
    return sum;
};
sumAll(1, "3");
// Do not edit below this line
module.exports = sumAll;
