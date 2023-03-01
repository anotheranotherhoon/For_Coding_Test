const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n")
const arr = input.slice(1).map(Number)

const dp = []
dp[0] = arr[0]
dp[1]  = arr[0]+arr[1]
dp[2] = Math.max(arr[0], arr[1]) + arr[2]

for(let i = 3; i<arr.length; i++){
  dp[i] = Math.max(dp[i-2] + arr[i], dp[i-3]+arr[i-1]+arr[i])
}


console.log(dp[input[0]-1])
