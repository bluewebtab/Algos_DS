/*

Binary search contains:
1. left = 0
2. right = arr.length - 1;
3. while loop: left <= right
4. mid: Math.floor((left + right) / 2)
5. foundVal = arr[mid]
6. if statement
    a. if(foundVal === target) return mid
    b. else if(foundVal < target) left = mid + 1
    c. else (right = mid - 1)
7. if while loop didn't find anything then return -1



*/

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const foundVal = arr[mid];

        if(foundVal === target){
            return mid
        }else if(foundVal < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
        
    }

    return -1;
}

console.log(binarySearch([1,2,3,5,6,7,8,9,10,11], 2))