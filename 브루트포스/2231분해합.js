const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim())

let answer = 0
for(let i = 1;  i<input; i ++ ){
  let num1 = i;
  let num2 = String(i).split('')
  let temp  = 0
  num2.map((ele) =>temp+= Number(ele))
  if(num1 + temp === input){
    answer = num1
    break
  } 
}
console.log(answer)