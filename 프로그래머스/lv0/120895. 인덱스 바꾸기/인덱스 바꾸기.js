function solution(my_string, num1, num2) {
    var answer = '';
    const a = my_string[num1]
    const b = my_string[num2]
    const arr = my_string.split('')
    arr[num1] = b
    arr[num2] = a
    answer=arr.join('')
    return answer;
}