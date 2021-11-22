/*
Given an array of integers, return the indices of the two numbers that add up to a given target

Step 1. Verify constraints
-are all numbers positive or negative?
-are there duplicate numbers in the array?
-Will there always be a solution available?
    No, there may not always be a solution
-What do we return if there's no solution?
    Just return null
-Can there be multiple pairs taht add up to the target?
    No, only 1 pair of numbers will add up to the target

Step 2: Write out some test cases

Step 3: Code your solution: multiple pointers

Step 4: What is the time/space complexity?



*/

/*
BRUTE FORCE
T: o(N^2)
S:  0(1)

What This code is doiing

First for loop
    Calculate ntf
2. nums[p2] === ntf


*/

const numsArray = [1, 3,5, 7, 9];
const targetToFind = 6;


const findTwoSum = function(nums, target) {
  for(let p1 = 0; p1 < nums.length; p1++) {
    
    const numberToFind = target - nums[p1];

    for(let p2 = p1 + 1; p2 < nums.length; p2++) {
      if(numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

console.log(findTwoSum(numsArray, targetToFind));


/*
Optimized solution

Use a Hash Map

*/






const findTwoSumTwo = function(nums, target) {

   let numsMap = {};
   
   for(let p = 0; p < nums.length; p++){
       
        const currentMapVal = numsMap[nums[p]]
        console.log(currentMapVal)
        if(currentMapVal >= 0){
            return [currentMapVal, p]
        }else{
            const numberToFind = target - nums[p]
            console.log(numberToFind)
            numsMap[numberToFind] = p;
        }
        console.log(numsMap)
   }



   console.log(numsMap)


    return null;
};

console.log(findTwoSumTwo(numsArray, targetToFind));