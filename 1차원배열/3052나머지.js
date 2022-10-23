const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = []

for (let i = 0; i < input.length; i++){
    arr.push(input[i]%42)
}

const set = new Set(arr)
const uniqueArr = [...set]

console.log(uniqueArr.length)
