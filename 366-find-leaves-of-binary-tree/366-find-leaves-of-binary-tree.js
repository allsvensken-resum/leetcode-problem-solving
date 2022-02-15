/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const findLeaves = function(root) {
    if (!root) return [];
    let leaves = [];
    while (root.left || root.right) {
        leaves.push(removeLeaves(root));
    }
    
    leaves.push([root.val])
    return leaves;
};

const removeLeaves = (root) => {
    let q = [[null, root]];
    let leaves = [];
    while (q.length > 0) {
       let [parent, curr] = q.pop(); 
        
       if (parent && !curr.left && !curr.right) {
           leaves.push(curr.val);
           if (parent.left === curr) parent.left = null;
           else if (parent.right === curr) parent.right = null;
       } 
        
       if (curr.left) q.unshift([curr, curr.left]);
       if (curr.right) q.unshift([curr, curr.right]);
    }
    
    return leaves;
}

