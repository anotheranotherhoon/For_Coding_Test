const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')
const len = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const limit = Number(input[2])


let start = 1;
let end = arr.reduce((acc, cur)=>Math.max(acc, cur))

let result = 0;
while(start <= end){
  let mid = parseInt((start + end)/2);
  let total = 0;
  for(x of arr){
    total += Math.min(mid, x)
  }
  if(total <= limit){
    result = mid;
    start = mid+1
  }
  else{
    end = mid-1
  }
}

console.log(result);