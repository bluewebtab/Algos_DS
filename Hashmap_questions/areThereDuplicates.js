function areThereDuplicates(...args){
   
    let newObj = {}

   for(let i = 0; i < args.length; i++){
       newObj[args[i]] = (newObj[args[i]] || 0) + 1
   }

   
    
    for( let key in newObj){
        if(newObj[key] >= 2){
            return true
        }
    }

    return false;
}

console.log(areThereDuplicates(1,2,3,2))