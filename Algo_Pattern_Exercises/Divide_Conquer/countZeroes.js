function firstZero(arr, low, high){

    if(high >= low){
        var mid = low + parseInt((high - low) / 2);
        if((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0)
            return mid;
        if(arr[mid] == 1)
            return firstZero(arr, (mid + 1), high);
        else    
            return firstZero(arr, low, (mid - 1))
    }
    return - 1;
}

function countZeroes(arr){
    var n = arr.length
    var first = firstZero(arr, 0, n - 1)

    if (first == -1){
        return 0;
    }
    return (n - first)
}



console.log(countZeroes([1,1,0,0, 0, 0, 0]))