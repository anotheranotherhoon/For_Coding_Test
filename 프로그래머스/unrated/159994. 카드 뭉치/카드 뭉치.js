function solution(cards1, cards2, goal) {
    for(let item of goal){
        if(item===cards1[0]){
            cards1.shift()
        }else if(item===cards2[0]){
            cards2.shift()
        }else{
            return "No"
        }
    }
    return "Yes"
}