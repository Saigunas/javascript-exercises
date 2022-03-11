const fibonacci = function(n) {

    if(n < 1) {
        return "OOPS";
    }

    let fiboArr = [1, 1];
    if(n > 2) {
        for(let i = 2; i < n; i++) {
            fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
        }
    }
    return fiboArr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
