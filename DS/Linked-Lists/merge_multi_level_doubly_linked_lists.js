/**
 * * Q: given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list.
 * * These child lists can also have one or more child doubly linked lists of their own, and so on.
 * * Return the list as a single level flattened doubly linked list
 * *
 * *
 * * 
 * * Constraints
 * * Can a doubly linked list have multiple child list nodes?
 * * Yes, every list node can have multiple levels of children.
 * *
 * * What do we do with child properties after flattening
 * * Just set the child property value to null
 * *
 */


/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null, prev = null, child = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
      this.child = child;
    }
  }
  
  // ---- Generate our linked list ----
  const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]
  
  const buildMultiLevel = function(nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;
  
    for(let i = 1; i < nodes.length; i++) {
      const val = nodes[i];
      let nextNode;
  
      if(Array.isArray(val)) {
        nextNode = buildMultiLevel(val);
        currentNode.child = nextNode;
        continue;
      }
  
      nextNode = new ListNode(val);
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
      currentNode = nextNode;
    }
    
    return head;
  }
  
  let multiLinkedList = buildMultiLevel(nodes);
  
  console.log(multiLinkedList)
  // ---- Generate our linked list ----
  
  const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }
  
  const printList = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
  }
  
  // --------- Our solution -----------
  
  var flatten = function (head) {
    if (!head) return head;
  
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.child === null) {
        currentNode = currentNode.next;
      } else {
        let tail = currentNode.child;
        while (tail.next !== null) {
          tail = tail.next;
        }
  
        tail.next = currentNode.next;
        if (tail.next !== null) {
          tail.next.prev = tail;
        }
  
        currentNode.next = currentNode.child;
        currentNode.next.prev = currentNode;
        currentNode.child = null;
      }
    }
  
    return head;
  };
  
  printListMulti(multiLinkedList);
  console.log('after flatten');
  printList(flatten(multiLinkedList));