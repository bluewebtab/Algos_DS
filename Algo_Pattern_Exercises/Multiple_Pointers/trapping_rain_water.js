/**
 *
 * Question
 *
 * Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.
 *
 * Constraints
 * Do the left and right side of the graph count as walls?
 * No the sides are not walls
 * Are there negative numbers?
 * No, all integers are positive
 *
 * Test case
 *
 * Best case: [0,1,0,2,1,0,3,1,0,1,2] 8
 * [] 0
 * [3] 0
 * [3,4,3] 0
 */

/**
 * Brute Force
 *
 */

const elevationArray = [0, 1, 0, 2, 1];

const getTrappedRainwater = function (heights) {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    console.log(currentWater);
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};

console.log(getTrappedRainwater(elevationArray));

/**
 * Optimal solution
 * 
 1. Identify pointer with lesser value
 2. Is this pointer value greater than or equal to max on that side
    if yes: update max on that side
    if no: get water for pointer value, add to total
 3. move pointer inwards
 4. repeat for other pointer
 */

const getTrappedRainwaterTwo = function (heights) {
  let left = 0,
    right = heights.length - 1,
    maxLeft = 0,
    maxRight = 0,
    total = 0;

  /**
   *  * While loop will run until they bump into each other
   */
  while (left < right) {
    /*
     * * step 1-------->
     */
    if (heights[left] <= heights[right]) {
      /*
       * *step 2-------->
       */
      //step 2a 
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        //step2b
        total += maxLeft - heights[left];
      }

      /*
       * * step 3-------->
       */
      left++;

      /*
       * *step 1-------->
       */
    } else {
      /*
       * *step 2-------->
       */
      //step 2a
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        //step2b
        total += maxRight - heights[right];
      }

      /*
       * *step 3-------->
       */
      right--;
    }
  }

  return total;
};

console.log(getTrappedRainwaterTwo(elevationArray));
