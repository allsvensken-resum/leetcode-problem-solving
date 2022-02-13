/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
     let front = head;
     const helper = (node) => {
        if (!node) return true;
        if (!helper(node.next)) return false; 
        if(front.val !== node.val) return false;
        front = front.next;
        return true;
     }
     
     return helper(head);
};

