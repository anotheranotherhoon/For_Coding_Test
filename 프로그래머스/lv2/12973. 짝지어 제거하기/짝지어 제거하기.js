function solution(s)
{
    answer = 0
    const stack = []
    for(let item of s){
        if(stack.at(-1)===item){
            stack.pop()
        }else{
            stack.push(item)
        }
    }
    stack.length === 0 ? answer = 1 : 0
    return answer;
}