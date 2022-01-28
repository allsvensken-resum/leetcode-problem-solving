/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let aCurrent = l1;
    let bCurrent = l2;
    let previousRemain = 0;
    let currNewList = null;
    let headNode = null;
    
    while(aCurrent || bCurrent) {
        let aCurrentVal = 0;
        let bCurrentVal = 0;
        
        if (aCurrent) {
            aCurrentVal = aCurrent.val;
            aCurrent = aCurrent.next;
        }
        
        if (bCurrent) {
            bCurrentVal = bCurrent.val;
            bCurrent = bCurrent.next;
        }
        
        let sum = aCurrentVal + bCurrentVal + previousRemain;
        previousRemain = 0;
        
        if (sum > 9) {
            sum = sum - 10;
            previousRemain = 1;
        }
        
        if (!currNewList) {
            currNewList = new ListNode(sum);
            headNode = currNewList;
            continue;
        }
        
        currNewList.next = new ListNode(sum);
        currNewList = currNewList.next;
    }
    
    if (previousRemain !== 0) {
        currNewList.next = new ListNode(previousRemain);
    }
    
    console.log(headNode);
    return headNode;
};

const splitToDigit = (numberString) => {
    return numberString.split("").map(Number);
}
