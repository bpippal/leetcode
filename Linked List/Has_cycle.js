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

let headResult = createLinkedList([1,2]);
displayLinkedList(headResult);


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let arr = [];

    while(head){

        if(arr.length === 0){
            arr.push(head);
            continue;
        }

        if(arr.includes(arr)){
            return true;
        }

        arr.push(head);
        
        head = head.next;
    }

    return false;
};

