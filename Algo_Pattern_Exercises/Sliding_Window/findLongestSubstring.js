function findLongestSubstring(string){
   let strLen = string.length;

   let seen = {}
   let start = 0;
   let longest = 0;

   for(let i = 0; i < strLen; i++){
    let char = string[i]

    if(seen[char]){
        console.log(seen[char])
        start = Math.max(start, seen[char])
    }
    console.log(start)
    console.log(i)
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
    
   }

   return longest;
  // add whatever parameters you deem necessary - good luck!
}

console.log(findLongestSubstring('ritrurbd'))
