const repeatString = function(str, num) {
    if(num < 0 ){
        return 'ERROR';
    }
    let result = '';
    for(let i=0;i<num;i++){
        result = result + str;
    }

    return result;
};

let str = repeatString('hey', 3);
console.log(str);

// Do not edit below this line
module.exports = repeatString;
