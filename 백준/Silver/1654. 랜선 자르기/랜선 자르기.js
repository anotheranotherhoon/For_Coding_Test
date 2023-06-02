const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')
const target = Number(input[0].split(' ')[1]);
//길이를 키우면, 얻을 수 있는 랜선의 수는 감소한다.
//길이를 줄이면, 얻을 수 있는 랜선의 수는 증가한다.

let arr = [];
for(let i = 1; i<input.length; i++){
  arr.push(Number(input[i]))
}

let start = 1;
let end = Math.max(...arr);

let result = 0;
while(start <= end){
  let mid = parseInt((start + end) /2);
  let total = 0;
  for(x of arr){
    total += parseInt(x/mid);//몫
  }
  if(total<target){
    end = mid-1
  }else{
    result = mid;
    start = mid+1
  }
}

console.log(result)
