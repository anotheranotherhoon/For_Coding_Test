function solution(my_string) {
    var answer = [];
    for(let i=0; i<my_string.length; i++){
        isNaN(my_string[i]) ? answer : answer.push(my_string[i]*1)
    }
    answer.sort()
    return answer;
}