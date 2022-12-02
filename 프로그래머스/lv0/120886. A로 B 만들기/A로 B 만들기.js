function solution(before, after) {
    var answer = 1;
    const arrBefore = before.split('')
    const arrAfter = after.split('')
    const map1 = new Map()
    const map2 = new Map()
    for(let i = 0; i<arrBefore.length; i++){
        if(map1.get(arrBefore[i])===undefined){
            map1.set(arrBefore[i], 1)
        }else{
            map1.set(arrBefore[i], map1.get(arrBefore[i])+1)
        }
    }
        for(let i = 0; i<arrAfter.length; i++){
        if(map2.get(arrAfter[i])===undefined){
            map2.set(arrAfter[i], 1)
        }else{
            map2.set(arrAfter[i], map2.get(arrAfter[i])+1)
        }
    }
    for(let i = 0; i<before.length;i++){
        if(map1.get(before[i]) !== map2.get(before[i])){
            answer = 0
        }
    }
    return answer;
}