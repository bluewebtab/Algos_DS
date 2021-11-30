/**
 *  *Given a string, find the length of the longest substring without repeating characters
 * 
 * * Constraints
 * * Is the substring contiguous? (contiguous: can't be broken apart)
 * * Yes, look for a substring not a subsequence
 * 
 * * substring vs subsequenc
 * * substring: "abcbbd" -----> "abc" contiguous
 * * subsequence "abcbbd" ----> "abc  d" not contiguous
 * 
 * *Does case sensitivity matter?
 * *No it doesn't matter
 * 
 * 
 * * Sliding window Technique (similar to two pointer)
 * * Form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it.
 * 
 * *1st Hint: Use a sliding window to represent the current substring
 * *2nd Hint: The size of the window will change based on new character, and characters we've already seen before
 * *3rd Hint: Our seen characters hashmap keeps track of what characters we've seen, and the index we saw them at
 * 
 * 
 * *Time complexity: o(n)
 * *space: o(n)
 */


function longestSubstr(str){

    if(str.length <= 1) return str.length;

    const seen = {}
    let left = 0, longest = 0;

    for(let right = 0; right < str.length; right++){
        //make a variable with currentChar
        const currentChar = str[right]
        //make a variable for the previouslySeenChar
        const previouslySeenChar = seen[currentChar]
     
        if(previouslySeenChar >= left){
            console.log(previouslySeenChar, left)
            //left would now start from the next char after previously seen char
            left = previouslySeenChar + 1;
            console.log(previouslySeenChar, left)
        }

        //the seen[currentChar] is updated with the new index 
        seen[currentChar] = right
        //check the longest from longest to the right - left + 1
        longest = Math.max(longest, right - left + 1)
    }

    return longest
    
}

console.log(longestSubstr("abcbdedbfgh"))