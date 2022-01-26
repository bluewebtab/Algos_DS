// Naive solution

// Time: o(n)
//Space: o(n)

const findCycle = function(head){
    let currentNode = head;
    const seenNodes = new Set();
    while(!seenNodes.has(currentNode)){
        if(currentNode.next === null){
            return false;
        }

        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }
    return currentNode;
}


//Floyd's tortoise and hare

