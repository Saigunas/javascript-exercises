const palindromes = function (word) {
    word = word.replace(/\W|_/g, '');
    word = word.toLowerCase();

    let wordReversed = '';
    for(let i = 1; i <= word.length; i++) {
        wordReversed = wordReversed + word[word.length - i];
    }

    console.log(wordReversed);
    if(wordReversed === word) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
