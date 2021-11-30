/*
* * The best data structure is a stack because we need to check the right
* * order of these parantheses

*/
function isValid(s){

    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    } 

    let stack = []


    for(let i = 0; i < s.length; i++){
        let el = s[i]
        
        if(map[el]){
            stack.push(map[el])
        }else{
            if(el !== stack.pop()){
                return false
            }
        }

        console.log(stack)

    }

    return stack.length === 0;






}


console.log(isValid('([])'))