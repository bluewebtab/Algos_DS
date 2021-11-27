/**
 * Brute force approach
 * 
 * Constraints
 * 1. What happens when two #'s appear beside each other?
 *  Delete the two values before the first #
 * 2. What happens to # when there is no character to remove?
 *  It deletes nothing then, just like backspace would.
 * 3.Are two empty strings equal to each other?
 *  Yes, consider two empty strings as equal
 * 4. Does case sensitivity matter?
 *  Yes it does, "a" doesn't equal "A"
 */

const backSpaceCompare = function (s, t){
    const findS = buildString(s)
    const findT = buildString(t)

    if(findS.length !== findT.length){
        return false
    }else{
        for(let p = 0; p < findS.length; p++){
            if(findS[p] !== findT[p]){
                return false
            }
        }
    }
    return true;
}

const buildString = function(string){
    const builtArray = []
    for(let p = 0; p < string.length; p++){
        if(string[p] !== '#'){
            builtArray.push(string[p])
        }else{
            builtArray.pop()
        }
    }

    return builtArray
}

console.log(backSpaceCompare('a#bc', 'a##bc'))


/**
 * Optimal solution
 * 
 * Time complexity o(a + b)
 * Space complexity o(1)
 */

 const string1 = "ab#z"
 const string2 = "az#z"
 
 var backspaceCompareTwo = function(S, T) {
     let p1 = S.length - 1, p2 = T.length - 1;
     
     while(p1 >= 0 || p2 >= 0) {
         if(S[p1] === "#" || T[p2] === "#") {
             if(S[p1] === "#") {
                 let backCount = 2;
                 
                 while(backCount > 0) {
                     p1--;
                     backCount--;
                     
                     if(S[p1] === "#") {
                         backCount += 2;
                     }
                 }
             }
             
             if(T[p2] === "#") {
                 let backCount = 2;
                 
                 while(backCount > 0) {
                     p2--;
                     backCount--;
                     
                     if(T[p2] === "#") {
                         backCount += 2;
                     }
                 }
             }
         } else {
             if(S[p1] !== T[p2]) {
                 return false;
             } else {
                 p1--;
                 p2--;
             }
         }
     }
     
     return true;
 };
 
 console.log(backspaceCompareTwo(string1, string2));