const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0) return 'OOPS';
    if(num == 0) return 0;
    if(num == 1 || num == 2) return 1;
    let prev = 1;
    let curr = 1;
    for(let i=3;i<=num;i++){
        let temp = curr + prev;
        prev = curr;
        curr = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
