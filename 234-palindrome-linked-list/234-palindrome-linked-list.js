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
   let visited = []; 
   helper(head, visited);
   let left = 0;
   let right = visited.length - 1;
   while (left < right) {
        if (visited[left] !== visited[right]) return false;   
        left += 1
        right -= 1
   }
   
   return true;
};

const helper = (node, visited) => {
    if (node.next === null) {
        visited.push(node.val)
        return;
    }     
    
    visited.push(node.val);
    helper(node.next, visited);
}