const reverseString = function(str) {
    let answer = '';
    let size = str.length;

    for(let i=size-1;i>=0;i--){
        answer += str[i];
    }

    return answer;
};

// Do not edit below this line
module.exports = reverseString;
