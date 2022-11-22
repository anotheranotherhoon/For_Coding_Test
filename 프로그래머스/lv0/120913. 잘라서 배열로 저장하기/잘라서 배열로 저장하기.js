function solution(my_str, n) {
    const result = []
    for(let i = 0 ; i < (my_str.length/n) ; i ++) {
        let part = ''
        for(let j = i*n ; j < i*n+n ; j ++) {
            if(my_str[j]) part+=my_str[j]
            else break
        }
        result.push(part)
    }
    return result
}