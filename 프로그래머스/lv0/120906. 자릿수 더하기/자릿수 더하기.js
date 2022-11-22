function solution(n) {
    const arr = String(n).split('')
    var answer = 0;
    for(let i = 0; i<arr.length; i++){
        answer += arr[i]*1
    }
    return answer;
}