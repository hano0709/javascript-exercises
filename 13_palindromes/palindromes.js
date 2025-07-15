function cleanString(string){
    string = string.toLowerCase();
    const chars = string.split('');
    console.log(chars);
    for(let i=chars.length-1;i>=0;i--){
        if((chars[i] >= 'a' && chars[i] <= 'z') || (chars[i] >= '0' && chars[i] <= '9')){}
        else {
            chars.splice(i, 1);
        }
    }
    string = chars.join('')
    return string;
}

const palindromes = function (string) {
    string = cleanString(string);
    let j = string.length-1;
    let n = Math.floor(j/2);
    let flag = true;
    console.log(string);
    console.log(j);
    console.log(n);
    for(let i=0;i<=n;i++){
        if(string[i] != string[j]){
            flag = false;
            break;
        }
        j--;
    }
    return flag;
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
