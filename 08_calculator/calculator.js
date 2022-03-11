const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sumOfArr = 0;
	for(let n of arr) {
    sumOfArr = sumOfArr + n;
  }
  return sumOfArr;
};
const multiply = function(arr) {
  let multi = 1;
  for(let n of arr) {
    multi = multi * n;
  }
  return multi;
};

multiply([2,3,4]);
const power = function(n, pow) {
  let powered = 1;
	for(let i = 1; i <= pow; i++) {
    powered = powered * n;
  }
  return powered;
};

const factorial = function(n) {
	let factoring = 1;
  for(let i = n; i > 1; i--) {
    factoring = factoring * i;
  }
  return factoring;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
