/**
 * * Linked Lists
 * * 
 * 
 * 
 * 
 * * Class ListNode {
 * * value: 2,
 * * next: Listnode  
 * 
 * *Question
 * * Given a linked list, return it in reverse
 * * 
 * 
 * 
 * *What do we return if we get null or a single node?
 * * Just return null and the node back respectively
 * 
 * 
 * 
 * * Step 2: write out some test cases
 * 
 * 
 * 
 * * Time complexity: o(n)
 * * Space complexity: o(1)
 */


const reverseLinkedList = function(head){

    let prev = null;
    let current = head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}



