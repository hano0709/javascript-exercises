const sumAll = function(start, end) {
    let answer = 0;
    if(typeof start != 'number' || typeof end != 'number') return 'ERROR';
    if(Number.isInteger(start) == false || Number.isInteger(end) == false) {return 'ERROR'};
    if(start <0 || end < 0) return 'ERROR';
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    for(let i =start;i<=end;i++){
        answer += i;
    }

    return answer;
};

console.log(sumAll(2.4, 4));

// Do not edit below this line
module.exports = sumAll;
