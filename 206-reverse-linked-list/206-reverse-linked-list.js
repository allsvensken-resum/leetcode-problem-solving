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
const reverseList = function(head) {
    if (!head) return head;
    let prev = null
    let curr = head;
    let next = curr.next;
    while (curr) {
        curr.next = prev;
        prev = curr
        if (next === null) {
            head = curr;
            break;
        }
        curr = next;
        next = curr.next;
    }
    
    return head;
};