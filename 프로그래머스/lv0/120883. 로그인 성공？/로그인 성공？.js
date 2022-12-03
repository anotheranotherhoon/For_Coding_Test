function solution(id_pw, db) {
    var answer = 'fail';
    for(let i = 0; i<db.length; i++){
        if(id_pw[0] !== db[i][0]){
            continue
        }else if(id_pw[1] === db[i][1]){
             return 'login'
            break
        }else{
            return 'wrong pw'
        }
    }
    return answer;
}