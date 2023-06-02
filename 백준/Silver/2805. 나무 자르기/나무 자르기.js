const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')

const target = input[0].split(' ').map(Number)[1];
const arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);

let result = 0
while(start<=end){
  let mid = parseInt((start + end)/2);
  let total = 0
  for( x of arr){
    if(x > mid){
      total += x-mid
    }
  }
  if(total < target){
    end = mid -1
  }else {
    result = mid;
    start = mid +1
  }
}
console.log(result);
