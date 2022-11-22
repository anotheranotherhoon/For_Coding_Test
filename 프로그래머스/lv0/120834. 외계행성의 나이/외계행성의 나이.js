function solution(age) {
    var answer = ''
    const table = {
        0 : 'a',
        1 : 'b',
        2 : 'c',
        3 : 'd',
        4 : 'e',
        5 : 'f',
        6 : 'g',
        7 : 'h',
        8 : 'i',
        9 : 'j'
    }
    const ageArr = String(age).split("");
    for(let i = 0; i<ageArr.length; i++){
        answer += table[ageArr[i]]
    }
    return answer;
}