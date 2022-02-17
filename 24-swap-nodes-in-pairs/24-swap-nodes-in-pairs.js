/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    if (!head || !head.next) return head; 
    let prev = null;
    let curr = head;
    let next = curr.next;
    while (next && next.next) {
        let oneStepOfNext = next.next;
        let twoStepOfNext = next.next.next;
        curr.next = oneStepOfNext;
        next.next = curr;
        if (!prev) head = next;
        if (prev) prev.next = next;
        prev = curr;
        curr = oneStepOfNext;
        next = twoStepOfNext;
    };
    
    if (next) {
        curr.next = next.next;
        next.next = curr
        if (!prev) head = next;
        if (prev) prev.next = next;
    }
    
    return head;
};