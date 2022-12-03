function solution(my_string) {
    var answer = '';
    let lower = my_string.toLowerCase()
    let arr = lower.split('').sort()
    answer = arr.join('')
    return answer;
}