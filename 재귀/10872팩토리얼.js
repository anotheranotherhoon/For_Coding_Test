const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function factorial(num){
    if(num <=1){
        return 1;
    }
    return num * factorial(num-1)
}

console.log(factorial(input))