function solution(array, n) {
    var answer = 0;
    let newArr = [...array, n].sort()
    let 앞 = newArr[newArr.indexOf(n)-1]
    let 뒤 = newArr[newArr.indexOf(n)+1]
    if(!앞){
        answer = 뒤
    }else if(!뒤){
        answer = 앞
    }else{
        Math.abs(앞-n) <= Math.abs(뒤-n) ? answer = 앞 : answer = 뒤
    }
    return answer;
}