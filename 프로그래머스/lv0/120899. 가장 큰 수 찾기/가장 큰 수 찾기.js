function solution(array) {
    var answer = [];
    const newArr = [...array]
    newArr.sort((a,b)=>a-b)
    const biggest = newArr.at(-1)
    const idx = array.indexOf(biggest)
    answer.push(biggest)
    answer.push(idx)
    return answer;
}