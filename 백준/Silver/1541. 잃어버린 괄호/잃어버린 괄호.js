const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString()

const arr = input.split('-')
const data = []

for(let i = 0; i<arr.length; i++){
  let temp = arr[i].split('+')
  let sum = temp.reduce((acc,cur)=>Number(acc)+Number(cur))
  data.push(sum)
}

let answer = data[0]
for(let j = 1; j<data.length; j++){
  answer -= data[j]
}

console.log(answer)

