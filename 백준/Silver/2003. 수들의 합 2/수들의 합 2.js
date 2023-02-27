const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n")
const target =Number(input[0].split(' ')[1])
const arr = input[1].split(' ').map(Number)

let answer = 0;

for(let i = 0; i<arr.length; i++){
  let sum = 0;
  for(let j = i; j<arr.length; j++){
    sum+=arr[j]
    if(sum==target) answer++;
  }
}

console.log(answer)
