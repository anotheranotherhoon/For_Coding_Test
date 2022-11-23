function solution(order) {
    var answer = 0;
    const arr = String(order).split('')
    const threeSixNine =  ['3', '6', '9']
    arr.map((el)=>threeSixNine.includes(el) ? answer++ : answer)
    return answer;
}