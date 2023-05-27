/**
 * Reverse's a linked list and returns the head
 * 
 * Approach - At any given node, have a reference to current node, its previous node and its next node, link the curr to previous 
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
