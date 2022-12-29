function solution(price, money, count) {
    var answer = -1;
    let data = 0
    for(let i = 0 ; i< count; i++){
        data += price*(i+1)
    }

    return money > data ? 0 : data-money
}