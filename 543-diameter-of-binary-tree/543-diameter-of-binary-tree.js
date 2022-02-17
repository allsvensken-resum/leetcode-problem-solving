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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
   if (!root) return 0;
   let q = [root];
   let diameter = -Infinity;
   while (q.length > 0) {
      let curr = q.pop(); 
      let currSum = findSumOfLeftAndRightSubTree(curr);
      diameter = Math.max(currSum, diameter);
      if (curr.left) q.unshift(curr.left);
      if (curr.right) q.unshift(curr.right);
   }
    
   return diameter;
};

const findHeight = (node) => {
    if (!node) return  -1;
    let leftHeight = findHeight(node.left);
    let rightHeight = findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

const findSumOfLeftAndRightSubTree = (root) => {
   let leftHeight = findHeight(root.left) + 1;
   let rightHeight = findHeight(root.right) + 1;
   return leftHeight + rightHeight; 
}