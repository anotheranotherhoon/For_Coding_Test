function solution(t, p) {
    var answer = 0;
    const len = p.length
    for(let i = 0; i<=t.length-p.length;i++){
        const temp = t.slice(i,i+len)*1
        temp <= p*1 ? answer++ : answer
    }

    return answer;
}