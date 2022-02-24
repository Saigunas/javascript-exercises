const reverseString = function(wrd) {
    let wrdReversed = wrd.slice(-1);
    for(let i = 1; i < wrd.length; i++) {
        wrdReversed += wrd.slice(-1-i, -i);
    }
    console.log(wrdReversed);
    return wrdReversed;
};
reverseString('John');
// Do not edit below this line
module.exports = reverseString;
