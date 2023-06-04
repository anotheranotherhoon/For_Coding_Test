const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')
const [n,m] = input[0].split(' ').map(Number);

const arr =[]
for(let i = 1; i<=n;i++){
  arr.push(i)
}

for(let i = 1; i<=m;i++){
  let [a,b] = input[i].split(' ').map(Number);
  temp = arr[a-1]
  arr[a-1] = arr[b-1]
  arr[b-1] = temp
}

console.log(arr.join(' '));



