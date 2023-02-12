function solution(n, words) {
    var answer = [];
    const map = new Map()
    let lastWord = words[0].at(-1)
    map.set(words[0],1)
    for(let i = 1; i<words.length; i++){
        if(map.has(words[i]) || lastWord !== words[i][0]){
            const player = (i%n)+1
            const turn = Math.floor(i/n)+1
            return [player, turn]
        }else{
            map.set(words[i], 1)
            lastWord = words[i].at(-1)
        }
    }
    return [0,0];
}