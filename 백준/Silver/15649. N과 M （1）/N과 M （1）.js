const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n')
const [n,m] = input[0].split(' ').map(Number);
//n = 4, m = 2

let arr = [];
for(let i = 1; i<=n; i++){
  arr.push(i)
}

let visited = new Array(n).fill(false)
let selected = [];
let answer = "";

function DFS(arr, depth){
  if(depth ===m){
    let result = [];
    for(let i of selected){
      result.push(arr[i])
    }
    for(let x of result){
      answer += x +" ";
    }
    answer += "\n"
    return
  }
  for(let j = 0; j<arr.length; j++){
    if(visited[j]) continue
    selected.push(j);
    visited[j] = true;
    DFS(arr, depth+1);
    selected.pop();
    visited[j] = false;
  }
}

DFS(arr,0);
console.log(answer);
