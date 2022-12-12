function solution(keyinput, board) {
    var answer = [0,0];
    for(let i = 0; i<keyinput.length;i++){
        if(keyinput[i]==='up'){
            answer[1]===Math.floor(board[1]/2) ? answer : answer[1]++
        }else if(keyinput[i]==='down'){
            answer[1]===Math.floor(board[1]/2)*-1 ? answer : answer[1]--
        }else if(keyinput[i]==='right'){
            answer[0]===Math.floor(board[0]/2) ? answer : answer[0]++
        }else{
            answer[0]===Math.floor(board[0]/2)*-1 ? answer : answer[0]--
        }
    }
    return answer;
}