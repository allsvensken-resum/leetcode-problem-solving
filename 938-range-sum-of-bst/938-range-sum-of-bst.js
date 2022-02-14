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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
   return dfs(root, low, high);
};

const dfs = (node, low, high) => {
   let sum = 0;
   if (!node) return sum;
   if (node.val >= low && node.val <= high) sum += node.val;
    
   if (low < node.val) {
       sum += dfs(node.left, low, high); 
   }
   
   if (high > node.val) {
       sum += dfs(node.right, low, high); 
   }
    
   return sum;
}