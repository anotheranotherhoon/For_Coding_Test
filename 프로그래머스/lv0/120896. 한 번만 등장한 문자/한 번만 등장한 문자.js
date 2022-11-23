function solution(s) {
    var answer =[]
    const map = new Map();
    for(let i = 0; i<s.length; i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],1)
        }
    }
    map.forEach((value, key) => value === 1 ? answer.push(key) : answer)
    answer.sort()
    const data = answer.join('')
    return data
}