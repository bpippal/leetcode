/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Approach
 * Reverse the linked list, traverse through the linked list till the node to be deleted is found, at this point ensure we have access to prevnode and next node, join these node's ensuring current node is eliminated
 * 
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let reversedHead = reverseLinkedList(head);

    let counter = 1;

    let prevNode = null;

    let curr = reversedHead;

    while(curr){

        let nextNode = curr.next;

        if(counter === n && prevNode === null){
            return reverseLinkedList(curr.next);
        }

        if(counter === n){
            prevNode.next = nextNode;
        }

        prevNode = curr;

        curr = curr.next;

        counter++;
    }

    return reverseLinkedList(reversedHead);

};

function reverseLinkedList(head){

    if(!head){
        return null;
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