function binarySearch(nums,left, right, target){
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        const foundVal = nums[mid]

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


const searchRange = function (nums, target){
    if(nums.length === 0) return [-1, -1];

    const firstPos = binarySearch(nums, 0, nums.length -1, target)

    if(firstPos === -1) return [-1, -1]
    
    let startPos = firstPos,
                   endPos = firstPos,
                   temp1,temp2;
    while(startPos !== -1){
        temp1 = startPos;
        console.log(startPos)
        //B-S params will have nums, 0(start of array), startPos - 1(number before original startPos), and target
        startPos = binarySearch(nums, 0, startPos - 1, target)
        console.log(startPos)
    }

    //startPos will be temp1(number before -1)
    startPos = temp1;
    while(endPos !== -1){
        temp2 = endPos;
        //B-S params will have nums, endPos + 1(number after original startPos), nums.length - 1(end of array), and target
        endPos = binarySearch(nums, endPos + 1, nums.length - 1, target)
        console.log(endPos)
    }
    //endPos will be temp2(number before -1)
    endPos = temp2

    return [startPos, endPos]
}

console.log(searchRange([1,3,5,5,5,8,9], 5))