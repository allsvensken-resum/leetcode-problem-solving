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
const maxDepth = function(root) {
     return findDepth(root);
};

const findDepth = (node) => {
   if (!node) return 0; 
   let leftHeight = findDepth(node.left);
   let rightHeight = findDepth(node.right);
   return Math.max(leftHeight, rightHeight) + 1;
}