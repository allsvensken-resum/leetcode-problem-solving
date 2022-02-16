/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    let prev = null
    let curr = head;
    while (curr) {
       if (curr.val === val) {
          if (prev) {
              prev.next = curr.next;
              curr.next = null;
              curr = prev.next;
              continue;
          } 
          
          head = curr.next; 
          curr.next = null;
          curr = head;
          continue;
       } 
        
       prev = curr;
       curr = curr.next;
    }
    
    return head;
};