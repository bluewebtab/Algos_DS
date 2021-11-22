function longestPalindrome(str){
    let occurrences = [...Array(128)].map(x => 0)
    for(const letter of str.split("")){
        //iterates through all letters and adds 1 to the index
        occurrences[letter.charCodeAt(0)]++
    }
    console.log(occurrences)
    let length = 0;
    for(const occ of occurrences){
        length += occ % 2 == 0 ? occ : occ - 1
    }

    if(length < str.length) length++;
    return length;

}

console.log(longestPalindrome("abdccdceeebebc"))