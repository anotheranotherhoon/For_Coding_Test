function solution(n) {
    var answer = 1
    let pizza=6
    while(pizza%n!==0){
        pizza+=6
        answer++
    }
    return answer;
}