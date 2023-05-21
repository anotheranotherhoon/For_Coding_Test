const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')
const arr = input[1].split(' ').map(Number);


arr.sort((a,b)=>a-b);

let answer = 0;
let wait = 0
for(let i = 0; i<arr.length; i++){
  answer += wait + arr[i]
  wait += arr[i]
}

console.log(answer)