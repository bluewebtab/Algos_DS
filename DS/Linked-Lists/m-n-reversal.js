/**
 * * Question: Given a linked list and numbers m and n, return it back
 * * with only positions m to n in reverse.
 * 
 * * Will m and n always be within the bounds of the linked list?
 * 
 * Yes, assume 1 <= m <= n <= length of linked list
 * 
 * Can we receive m and n values for the whole linked list?
 * Yes, we can receive m = 1 and n = length of linked list
 * 
 * 
 * *Steps
 * * 1. get current node
 * * 2. store next value
 * * 3. update next value to list so far
 * * 4. store current node as list so far
 * * 5. update current node to stored next value at 2
 */


class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next
    }
}

const linkedList = [5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null)


const printList = (head) => {
    if(!head){
        return;
    }

    console.log(head.val)
    printList(head.next)
}

var reverseBetween = function(head, m, n){
    let currentPos = 1, currentNode = head;
    let start = head

    while(currentPos < m){
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode

    while(currentPos >= m && currentPos <= n){
        const next = currentNode.next
        currentNode.next = newList;
        newList = currentNode
        currentNode = next
        currentPos++;
    }

    start.next = newList
    tail.next = currentNode;

    if(m > 1){
        return head
    }else{
        return newList
    }
}


printList(linkedList);
console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));