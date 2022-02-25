const ftoc = function(f) {
  c = (f - 32) * 0.5556;
  c = round(c, 1);
  return c;
};

const ctof = function(c) {
  f = (c * 1.8) + 32;
  f = round(f, 1);
  return f;
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

ftoc(32);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
