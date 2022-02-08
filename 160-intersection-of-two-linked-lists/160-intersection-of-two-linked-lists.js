/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    let currA  = headA;
    while (currA) {
        if (compareAnotherList(headB, currA)) return currA
        currA = currA.next;
    }
    return null; 
};

const compareAnotherList = (headNode, node) => {
    let curr = headNode;
    while (curr) {
        if (node === curr) return true;
        curr = curr.next;
    }
    
    return false;
}

