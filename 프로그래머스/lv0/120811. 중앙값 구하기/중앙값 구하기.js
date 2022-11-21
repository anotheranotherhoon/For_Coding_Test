function solution(array) {
    var answer = 0;
    let index = Math.floor(array.length/2)
    array.sort((a,b) => a-b)
    answer = array[index]
    return answer;
}