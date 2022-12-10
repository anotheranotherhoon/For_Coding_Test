function solution(s) {
    var answer = 0;
    let newArr = s.split(' ')
    for(let i = 0; i<newArr.length; i++){
        if(newArr[i+1] === 'Z' || newArr[i] === 'Z'){
            continue
        }
        else{
            answer += newArr[i]*1
        }
    }
    return answer;
}