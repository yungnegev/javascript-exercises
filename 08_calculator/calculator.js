const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  if(array.length == 0){
    return 0 
  }
  else if (array.length == 1){
    return array[0]
  }else{
    return array.reduce((a,b)=>a+b)
  }
};

const multiply = function(array) {
  return array.reduce((a,b) => a*b)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  if (num < 0) 
  return -1;
else if (num == 0) 
return 1;
else {
return (num * factorial(num - 1));
}
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



