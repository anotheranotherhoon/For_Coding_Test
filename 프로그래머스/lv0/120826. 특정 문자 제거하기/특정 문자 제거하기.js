function solution(my_string, letter) {
    var answer = '';
    const data = my_string.split('')
    const newData = data.filter((el)=> el !== letter)
    answer = newData.join('')
    return answer;
}