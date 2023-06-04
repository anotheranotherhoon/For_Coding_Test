const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString()

const arr = []
const m = input*1

for(let i = 0; i<m;i++){
  arr.push(i+1)
}
const visited = new Array(m).fill(false);
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