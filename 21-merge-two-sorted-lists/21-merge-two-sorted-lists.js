/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    else if (!list1 && list2) return list2;
    else if (!list2 && list1) return list1;
    let curr1 = list1;
    let curr2 = list2;
    let headNode = null;
    let currNode = null;
   
    if (curr1.val === curr2.val) {
        headNode = new ListNode(curr1.val, null);
        currNode = addNewNode(headNode, curr2.val);
        curr1 = curr1.next;
        curr2 = curr2.next;
    } else if (curr1.val < curr2.val) {
        headNode = new ListNode(curr1.val);
        currNode = headNode;
        curr1 = curr1.next;
    } else {
        headNode = new ListNode(curr2.val);
        currNode = headNode;
        curr2 = curr2.next;
    }
    
    while (curr1 && curr2) {
        if (curr1.val === curr2.val) {
            currNode = addNewNode(currNode, curr1.val);
            currNode = addNewNode(currNode, curr2.val);
            curr1 = curr1.next;
            curr2 = curr2.next;
        } else if(curr1.val < curr2.val) {
            currNode = addNewNode(currNode, curr1.val);
            curr1 = curr1.next;
        } else {
            currNode = addNewNode(currNode, curr2.val);
            curr2 = curr2.next;
        }
    }
    
    while (curr1) {
        currNode  = addNewNode(currNode, curr1.val);
        curr1 = curr1.next;
    }
    
    while (curr2) {
        currNode = addNewNode(currNode, curr2.val);
        curr2 = curr2.next;
    }
    
    return headNode;
};


const addNewNode = (currNode, value) => {
    currNode.next = new ListNode(value, null);
    return currNode.next;
}

