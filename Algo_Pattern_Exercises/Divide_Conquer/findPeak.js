function definePeak(arr, left = 0, right = arr.length - 1){
 
    //base function
    if(left >= right) return left;

    let mid = Math.floor((left + right) / 2)
    //if arr[mid] is less than or equal to arr[mid + 1] then add mid + 1 inside resursive function
    if(arr[mid] <= arr[mid + 1]){
        return definePeak(arr, mid + 1, right)
    }else{
        return definePeak(arr, left, mid )
    }
}

console.log(definePeak([3,2,6,4,3,5,8,6,2]))