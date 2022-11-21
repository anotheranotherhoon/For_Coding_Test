function solution(my_string) {
    var answer = '';
    let temp = []
    for(let i of my_string){
        temp.push(i)
    }
    temp.reverse()
    answer = temp.join('')
    return answer;
}