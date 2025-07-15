const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if(array.length == 0) return 0;
	return array.reduce((total, element) => {
    return total+element;
  })
};

const multiply = function(items) {
  return items.reduce((total, element) => {
    return total * element;
  })
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let answer = 1;
  for(let i=a;i>=1;i--){
    answer = answer * i;
  }

  return answer;
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
