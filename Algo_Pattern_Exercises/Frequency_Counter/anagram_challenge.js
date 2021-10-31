/*
    Given two String, write a function to determnine if the second string is an anagram of the first 

    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

*/

function anagram(str1, str2){
    if(str1.length !== str2.length) return false

    let objOne = {}
    let objTwo = {}
    for(let key of str1){
        objOne[key] = (objOne[key] || 0) + 1;
    }
    for(let key of str2){
        objTwo[key] = (objTwo[key] || 0) + 1;
    }

    for(let key in objOne){
        //"in" operator returns true if specified property is in the specified object
      if(!(key in objTwo)){
          return false
      }

      if(objOne[key] !== objTwo[key]){
          return false
      }


    }

    return true

}
console.log(anagram('', ''))