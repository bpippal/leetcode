class node {
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

/**
 * Create's linked list from array
 * 
 * @param {Array} arr - The array which is to be converted to a linked list.
 * @returns {Object} The head (reference) of the linked lits
 */
function createLinkedList(arr){

    let prev = null;
    let head = null;

    for(let i=0 ; i<arr.length ; i++){

        if(i === 0){
            head = new node(arr[i]);
            joinLinkedList(prev , head);
            prev = head;
        }else{
            const tempNode = new node(arr[i]);
            joinLinkedList(prev , tempNode);
            prev = tempNode;
        }
    }

    return head;
}

function joinLinkedList(prevNode , currNode){

    //Idea is to join previous node to current node so linking is established

    if(prevNode === null){
        currNode.next = prevNode;
    }else{
        prevNode.next = currNode;
    }

}

function displayLinkedList(head){

    while(head){
        process.stdout.write(head.val.toString() + "->");
        head = head.next;
        if(head === null){
            process.stdout.write("null\n");
        }
    }

}

/**
 * Reverse's a linked list and returns the head
 * 
 * @param {Object} head - The array which is to be converted to a linked list.
 * @returns {Object} The head (reference) of the linked lits
 */
function reverseLinkedList(head){

    if(!head){
        return head;
    }

    let prevNode = null;

    while(head){

        let nextNode = head.next;
        head.next = prevNode;

        prevNode = head;
        head = nextNode;
    }

    return prevNode;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    displayLinkedList(head);

    if(!head || !head.next){
        return;
    }

    let originalhead = head;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //1     2       3       4       5 

    let headOfSecondHalf = slow.next;

    slow.next = null;

    //Slow is the mid point of the first half of linked list    

    //Fast is the end point of linked list
    let reversedSecondHalfHead = reverseLinkedList(headOfSecondHalf);

    //Take one node at a time from originalHead and the reversedSecondHalfHead and combine them

    let counter = 0 ;

    let finalResult = originalhead;

    //Can create a dummy linked list to merge two linked list;

    let dummyHead = new node(-1);
    let curr = dummyHead;

    displayLinkedList(originalhead);
    displayLinkedList(reversedSecondHalfHead);

    while(originalhead && reversedSecondHalfHead){
        
        curr.next = originalhead;
        originalhead = originalhead.next;

        curr = curr.next;

        curr.next = reversedSecondHalfHead;
        reversedSecondHalfHead = reversedSecondHalfHead.next;

        curr = curr.next;

    }

    curr.next = originalhead ? originalhead : reversedSecondHalfHead;

    displayLinkedList(dummyHead.next)

};

let headResult = createLinkedList([1,2,3,4,5,6]);
reorderList(headResult);
