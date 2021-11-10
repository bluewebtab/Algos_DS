function firstZero(arr, low, high){

    if(high >= low){
        console.log(high)
        console.log(low)
        var mid = low + Math.floor((high - low) / 2);
        console.log(mid)
        if((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0){
            console.log(mid)
            return mid;
        }
        if(arr[mid] == 1){
            console.log(mid + 1, high)
            return firstZero(arr, (mid + 1), high);
        }      
        else{
            console.log(low, mid -1 )
            return firstZero(arr, low, (mid - 1))
        }  
            
    }
    return - 1;
}

function countZeroes(arr){
    var n = arr.length
    var first = firstZero(arr, 0, n - 1)
    console.log(first)
    console.log(first)
    if (first == -1){
        return 0;
    }
    console.log(first)
    return (n - first)
}



console.log(countZeroes([1,1,1,0,0, 0]))