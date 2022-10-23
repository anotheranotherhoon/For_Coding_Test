const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let max = Math.max(...input)
let idx = input.indexOf(String(max))


console.log(max)
console.log(idx+1)