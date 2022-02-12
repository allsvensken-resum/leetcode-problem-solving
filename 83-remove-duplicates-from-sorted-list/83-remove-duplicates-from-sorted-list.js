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
const deleteDuplicates = function(head) {
   if (!head || !head.next) return head;
   let prev = head;
   let curr = head.next;
   while (curr) {
       if (curr.val === prev.val) {
           prev.next = curr.next;
           curr.next = null;
           curr = prev.next;
           continue;
       }
       
       prev = curr;
       curr = curr.next;
   } 
    
   return head;
};
