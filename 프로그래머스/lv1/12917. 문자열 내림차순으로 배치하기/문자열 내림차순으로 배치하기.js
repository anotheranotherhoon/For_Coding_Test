function solution(s) {
    var answer = '';
    let data = s.split('')
    answer = data.sort((a,b)=> a>b ? -1 : 1).join('')
    return answer;
}