const repeatString = function(wrd, n) {

    if(n < 0) {return "ERROR"}

    let repeatedWrd = '';
    for(let i = 0; i < n; i++) {
        repeatedWrd += wrd;
    }
    console.log(repeatedWrd);
    return repeatedWrd;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
