const fs = require('fs');
const filePath = process.platform === 'linux' ? filePath : '.../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0].split(' ')[0])
const M = Number(input[0].split(' ')[1])
const cards = input[1].split(' ').map((ele)=>Number(ele))
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
console.log(answer)