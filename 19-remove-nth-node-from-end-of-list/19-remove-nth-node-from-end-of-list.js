/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
   let length = countListLength(head);
   if (length === n) {
       let next = head.next;
       head.next = null;
       head = next;
       return head;
   }
   let curr = head.next;
   let prev = head;
   let currIdx = 1;
   while (curr) {
        if ((length - currIdx) === n) {
            prev.next = curr.next;
            curr = null;
            return head;
        }     
        
        prev = curr;
        curr = curr.next;
        currIdx += 1;
   }
    
   return head;
};

const countListLength = (head) => {
    let curr = head;
    let count = 0;
    while (curr) {
        count += 1;
        curr = curr.next;
    }
    return count; 
}