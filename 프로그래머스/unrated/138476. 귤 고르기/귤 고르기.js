function solution(k, tangerine) {
    const kind = new Map()
    var answer = 0;
    tangerine.forEach((size)=>{
        kind.set(size, kind.has(size) ? kind.get(size)+1 : 1)
    })
    const sortedArr = [...kind].sort((a,b) => b[1] - a[1])
    for(let item of sortedArr){
        if(k>0){
            k = k - item[1]
            answer ++
        }
    }
    return answer
}