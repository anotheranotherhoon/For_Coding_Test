function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((acc, cur)=>acc + cur) / numbers.length
    return answer;
}