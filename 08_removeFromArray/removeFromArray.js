const removeFromArray = function(arr, ...items) {

    return arr.filter(value => !items.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
