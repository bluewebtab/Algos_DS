function findingSubstrings(word){
    if(word == ''){
        return ''
    }

    const first = word.charAt(0)
    console.log(first)
    console.log(word.substring(1))
    const rest = findingSubstrings(word.substring(1))
  
    let result = ''
    rest.split(',').forEach(subseq => {
        
        result += ',' + first + subseq;
        result += ',' + subseq;

    })
    console.log(result)
    return result.substring(1)
}

console.log(findingSubstrings('abc'))