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
    let visited = new Map();
    let currA = headA;
    let currB = headB;
    
    while (currA) {
        visited.set(currA, true);
        currA = currA.next;
    }
    
    while (currB) {
        if (visited.has(currB)) return currB;
        currB = currB.next;
    }
    
    return null;
};



