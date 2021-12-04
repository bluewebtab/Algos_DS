/**
 * * A subproblem is a problem we have to solve along the way to solving the main problem
 * * 
 * * Example
 * * Q: Given a string, find the length of the longest substring without repeating characters.
 * * M: Main problem: find length of longest unique substring
 * * S: sub problem: pattern matching - unique substring
 * * 
 * * Palindrome: A palindrom is a string that reads the same forwards and backwards
 * * 
 * 
 * 
 * 
 * * Valid Palindrome
 * * Given a string, determine if it is a palindrome, considering only alphanumeric characters
 * * and ignoring case sensitivity
 * 
 * * Test case
 * "aabaa" = true
 * "aabbaa" = true
 * "abc" = false
 * "a" = true
 * "" = true
 * "A man, a plan, a canal : Panama" = true
 * 
 * 
 * 
 * * Constraints
 * * Do we consider a palindrome as almost a palindrome
 * * Yes, return true if the string is already a palindrome
 * * 
 * * "reaceacar" = true
 * * "abccdba" = true
 * * "abcdefdba" = true
 * * "" = true
 * * "a" = true
 * * "ab" = true
 * 
 * Time complexity: o(n)
 * Space complexity: o(1)
 */


 var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
  };
  
  var validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
  };




console.log(validPalindrome('racedcar'))