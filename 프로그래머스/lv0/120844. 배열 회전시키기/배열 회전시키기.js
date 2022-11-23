function solution(numbers, direction) {
    var answer = [];
    if(direction==='right'){
        numbers.unshift(numbers.pop())
        answer.push(...numbers)
    }else{
        numbers.push(numbers.shift())
        answer.push(...numbers)
    }
    return answer;
}