/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let current = head;
    let visited = new Map();
    while (current) {
        if (!visited.has(current)) {
            visited.set(current, true);
            current = current.next;
            continue;
        } 
        
        return true;
    }
    
    return false;
};