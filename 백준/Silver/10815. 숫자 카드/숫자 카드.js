const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0]
const Narr = input[1].split(' ').map((el=>el*1))
const M = +input[2]
const Marr = input[3].split(' ').map((el=>el*1))

const map = new Map()

for(let i = 0; i<M; i++){
  map.set(Marr[i], 0)
}

for (let i = 0; i<N; i++){
  if(map.get(Narr[i])===0){
    map.set(Narr[i], 1)
  }
}
let arr = [...map.values()].join(' ')
console.log(arr)

