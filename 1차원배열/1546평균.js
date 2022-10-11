const fs = require('fs');
const filePath = process.platform === 'linux' ? filePath : './input.txt';
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(/\s+/);

const max = Math.max(...arr)
let answer = 0

for (let i = 0; i < n; i++){
    answer += arr[i]/max*100
}

console.log(answer/n)