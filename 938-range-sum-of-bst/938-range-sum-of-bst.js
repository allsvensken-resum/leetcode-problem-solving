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
   return helper(root, low, high);
};

const helper = (node, low, high) => {
   let sum = 0;
   if (!node) return sum;
   if (node.val >= low && node.val <= high) sum += node.val;
   let leftTreeSum = helper(node.left, low, high);
   let rightTreeSum = helper(node.right, low, high);
   sum = sum + leftTreeSum + rightTreeSum;
   return sum;
}