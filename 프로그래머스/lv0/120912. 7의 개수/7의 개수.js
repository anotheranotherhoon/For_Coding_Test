function solution(array) {
    const answer = array.join('').split('').filter((el)=>el==='7').length
    return answer
}