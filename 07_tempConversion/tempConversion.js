const ftoc = function(f) {
  let c = (f - 32) / 1.8
  rounded = Math.round(c * 10) / 10
  return rounded
};

const ctof = function(c) {
  let f = (c* 1.8) + 32
  rounded = Math.round(f * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
