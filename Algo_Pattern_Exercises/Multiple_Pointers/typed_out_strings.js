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
 * Time complexity o(a + b) = o(n)
 * Space complexity o(1)
 */

 const string1 = "ab#z"
 const string2 = "az#z"
 
 var backspaceCompareTwo = function(S, T) {
     let p1 = S.length - 1, p2 = T.length - 1;
     
     //step 1 -----> make a while loop that stops if p1 or p2 does not equal to 0
     while(p1 >= 0 || p2 >= 0) {

        //step 2 ------> make an if statement to check if S[p1] or T[p2] is equal to "#"
         if(S[p1] === "#" || T[p2] === "#") {
             //step 3 ----> this checks if S string has "#"
             if(S[p1] === "#") {
                 //this allows you to skip the "#" and next character
                 let backCount = 2;
                 //step 4 ---> while loop decreases index as well as backCount
                 while(backCount > 0) {
                     p1--;
                     backCount--;
                     //step 5 ---> increase backCount if "#" shows again
                     if(S[p1] === "#") {
                         backCount += 2;
                     }
                 }
             }
             
             //step 3 ---> this checks if T string has "#"
             if(T[p2] === "#") {
                //this allows you to skip the "#" and next character
                 let backCount = 2;

                //step 4 ---> while loop decreases index as well as backCount
                 while(backCount > 0) {
                     p2--;
                     backCount--;
                     
                    //step 5 ---> increase backCount if "#" shows again
                     if(T[p2] === "#") {
                         backCount += 2;
                     }
                 }
             }
         //step 2
         } else {
             //if S[p1] !== T[p2] it needs to check if the two strings will be the same
             if(S[p1] !== T[p2]) {
                 return false;
             //if not then S and T will go down an index
             } else {
                 p1--;
                 p2--;
             }
         }
     }
     

    //step 6 -----> if while loop is complete without anything returning false then it should return true
     return true;
 };
 
 console.log(backspaceCompareTwo(string1, string2));