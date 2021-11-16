function sortedFrequency(arr, val){

    var i = 0;

    var j = arr.length - 1;

    var count = 0;

    var middle;

    //if i is less than or equal to j and arr[middle] is not 
    //equal to val
    while(i <= j && arr[middle] != val){
        //get middle variable
        middle = Math.floor((i + j)/2);
        //if arr[middle] is less than val
        //i will equal to middle + 1
        if(arr[middle] < val){
            console.log(middle)
            i = middle + 1;
        } 

        //if arr[middle] is greater than val
        //j will equal to middle - 1;
        else if(arr[middle] > val){
            console.log(middle)
            j = middle - 1;
        } 
        //else  i will equal to middle
        //and j will equal to middle + 1
        else{
            console.log(middle)
            i = middle;

            j = middle + 1

        }

    }

    console.log(i, j)
    //while loop will continue if arr[i] === val
    //or arr[j] === val
    while(arr[i] === val || arr[j] === val){
        console.log(i, j)
        //if arr[i] === val
        //then count is increased and i decreases
        if(arr[i] === val){
            console.log(i)
            count++;

            i--;

        }

        //if arr[j] === val
        //then count increases and j increases
        if(arr[j] === val){
            console.log(j)
            count++;

            j++;

        }

    }
    console.log(arr[middle])
    //if arr[middle] === val then return count
    if(arr[middle] === val) return count;

    return -1

}

console.log(sortedFrequency([1,1,1,1,1,2,2,3], 2))