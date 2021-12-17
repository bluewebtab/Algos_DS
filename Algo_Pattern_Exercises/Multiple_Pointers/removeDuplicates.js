/**
 * 
** Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
** Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*
*
*
**What to do?
** 1. remove duplicates in-place by modifying the original array
** 2. We will use 2 pointer method
**      (j) is needed to iterate through the given array
**      (i) is needed to place a unique number to the position next to it
**
** Instructions
** 1. Return 0 if the given array is empty
** 2. Declare two pointers, i and j, and set them to 0 and 1 respecively
** 3. Use a while loop to check if the number with index j is equal to the number with index i
** 4. If not, increment i by 1 and copy the value of the number with index j to the element at the index i and then increment j by 1
** 5. If they are equal, increment j to skip the duplicate
** 6. After the loop finishes, return the length of the unique numbers, which equals to i + 1
 */



function removeDuplicates(s){

    if(s.length === 0) return 0;

    let i = 0;
    let j = 0;

    while( j < s.length){

        if(s[i] !== s[j]){
            i++
            s[i] = s[j]
            j++
        }else{
           j++
        }
    }

    return i + 1

}

console.log(removeDuplicates([1,1,3,3,4,4,5,5,6,7,8,9]))