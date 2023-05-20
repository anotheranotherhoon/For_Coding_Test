const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])

let arr = [];


for(let i = 1; i<=n;i++){
  arr.push(Number(input[i]));
}

let cnt = 0;
for(let i = n-1; i>=0; i--){
  cnt +=parseInt(k / arr[i]);
  k %= arr[i]
}

console.log(cnt)