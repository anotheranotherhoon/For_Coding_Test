function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length;){
        const sliceN = []
        for(let j = 0; j < n; j++){
            sliceN.push(num_list[i])
            i++
        }
        answer.push(sliceN)
    }
    return answer;
}