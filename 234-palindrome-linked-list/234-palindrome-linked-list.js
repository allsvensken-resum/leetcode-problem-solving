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
    let endOfFirstHalf = findEndOfFirstHalf(head); 
    let headOfSecondHalf = reverseLinkedList(endOfFirstHalf);
    let currFirst = head;
    let currReversed = headOfSecondHalf;
    while (currFirst && currReversed) {
        if (currFirst.val !== currReversed.val) return false;
        currFirst = currFirst.next;
        currReversed = currReversed.next;
    } 
    
    let reversedSecondHalfBack = reverseLinkedList(headOfSecondHalf);
    endOfFirstHalf.next = reversedSecondHalfBack;
    return true;
};

const reverseLinkedList = (head) => {
   let curr = head;
   let next = curr.next;
   let prev = null;
   while (curr) {
       curr.next = prev;
       prev = curr;
       if (!next) break;
       curr = next;
       next = curr.next;
   }
   
   return curr;
}

const findEndOfFirstHalf = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

