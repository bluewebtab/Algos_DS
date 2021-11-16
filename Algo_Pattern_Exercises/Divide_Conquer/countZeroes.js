function firstZero(arr, start, end){

    if(end >= start){
        
        var mid = start + Math.floor((end - start) / 2);
        console.log(mid)
        if((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0){
            return mid;
        }
        if(arr[mid] == 1){
            
            return firstZero(arr, (mid + 1), end);
        }      
        else{
           
            return firstZero(arr, start, (mid - 1))
        }  
            
    }
    return - 1;
}

function countZeroes(arr){
    var n = arr.length
    var first = firstZero(arr, 0, n - 1)
    console.log(first)
    if (first == -1){
        return 0;
    }
    console.log(first)
    return (n - first)
}



console.log(countZeroes([1,1,1,0,0, 0]))