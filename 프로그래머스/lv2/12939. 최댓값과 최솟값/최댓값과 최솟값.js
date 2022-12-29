function solution(s) {
    var answer = '';
    let data = s.split(' ').sort((a,b)=>Number(a) > Number(b) ? 1 : -1)
    answer += data[0]
    answer += ' '
    answer += data.at(-1)
    console.log(data)
    return answer;
}