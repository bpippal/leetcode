class node {
    constructor(data){
        this.val = data;
        this.next = null;
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
 * APPROACH - Have two pointer's, slow and fast to find the middle node of the linked list
 *            Once middle is found, reverse the second half of the linked list, now take one node each from the originl half and one from the reversed second half.
 *            Join them by creating a dummyNode, dummyNode connects one node EACH from the original half and the reversed second half completing the solution.
 */


/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {


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

    while(originalhead && reversedSecondHalfHead){
        
        curr.next = originalhead;
        originalhead = originalhead.next;

        curr = curr.next;

        curr.next = reversedSecondHalfHead;
        reversedSecondHalfHead = reversedSecondHalfHead.next;

        curr = curr.next;

    }

    curr.next = originalhead ? originalhead : reversedSecondHalfHead;

    return dummyHead.next;
};

