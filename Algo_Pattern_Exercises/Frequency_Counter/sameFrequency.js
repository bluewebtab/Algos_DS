function sameFrequency(num1, num2){

    let numOne = num1.toString()
    let numTwo = num2.toString()

    if(numOne.length !== numTwo.length){
        return false
    }

    let numOneObj = {}
    let numTwoObj = {}

    for(let key of numOne){
        numOneObj[key] = (numOneObj[key] || 0) + 1
    }

    for(let key of numTwo){
        numTwoObj[key] = (numTwoObj[key] || 0) + 1
    }

    for(let key in numOneObj){
        if(key in numTwoObj ){
            numOneObj[key] -= 1
        }else{
            return false
        }
    }

    return true
}


console.log(sameFrequency(2816,1862))