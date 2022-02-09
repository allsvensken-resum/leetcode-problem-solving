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
     let headRef = {
         ref : null
     }
     
     if(!head) return head;
     helper(headRef, head, head.next);
     head = null
     return headRef.ref;
};

const helper = (head, curr, next) => {
   if (!next) { 
       head.ref = curr
       return;
   }; 
    
   helper(head, curr.next, curr.next.next); 
   next.next = curr;
   curr.next = null;
}