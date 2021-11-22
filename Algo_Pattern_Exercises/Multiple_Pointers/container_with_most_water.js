/**
 *You are given an array of positive integers where each integer represents the height of  a vertical line on a chart.
  FInd two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold 
 *

  Constraints
  Does the thickness of the lines affect the area?
  Do the left and right sides of the graph count as walls?
  Can we pick two values if one value is higher in the middle?


  Test cases
  [] = 0
  [7] = 0
  Needs two elements in the array


  Formulas to use

  area = l * w

  Find minimum length because that is where the length will stop for both walls ([8, 9] - Anything after 8 won't be able to hold water so 8 will be the length)
  area = min (a, b) * (b(index) - a(index))


  What we are lookin for?
  The maximum amount of water
  This mean we should use multiple pointers

 */

/**
 * Brute force solution
 *
 *
 */

const heightsArray = [9, 4, 2, 2, 3, 9];

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer(heightsArray));

/**
 *
 * Optimal solution: two shifting pointers (multiple pointers pattern)
 *
 *
 */

const getMaxWaterContainerTwo = function (heights) {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    console.log({p1, p2})
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    console.log({height, width, area})
    maxArea = Math.max(maxArea, area);
    console.log({maxArea})

    //if p1 is less than or equal to p2
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainerTwo(heightsArray));
