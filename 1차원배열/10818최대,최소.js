const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(/\s+/);

let max = +arr[0];
let min = +arr[0];

for (let i = 1; i < n; i++) {
    if (max < +arr[i]) {
        max = +arr[i];
    }

    if (min > +arr[i]) {
        min = +arr[i];
    }
}
console.log(`${min} ${max}`);