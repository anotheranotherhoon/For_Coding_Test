function solution(box, n) {
    var answer = 0;
    const a = Math.floor(box[0] / n)
    const b = Math.floor(box[1] / n)
    const c = Math.floor(box[2] / n)
    answer = a*b*c
    return answer;
}