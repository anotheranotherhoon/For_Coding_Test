function solution(k, m, score) {
    var answer = 0;
    const box = Math.floor(score.length/m)
    score.sort((a,b)=>b-a)
    const arr = score.slice(0,box*m)
    for(let i = 0; i<box; i++){
        const temp = arr.slice(i*m, i*m+m)
        answer += Math.min(...temp)*m
        
    }
    return answer;
}