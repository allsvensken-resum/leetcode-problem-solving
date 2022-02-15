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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
    dfs(root, null);
};

const dfs = (node, prevNode) => {
   if (!node) return null;
   if (prevNode) prevNode.right = node;
   if (!node.left && !node.right) return node;
   let tempLeft = node.left;
   let tempRight = node.right;
   node.left = null;
   node.right = null;
   let leftLeave = dfs(tempLeft, node);
   let rightLeave = dfs(tempRight, leftLeave ? leftLeave : node);
   if (!rightLeave && leftLeave) return leftLeave;
   return rightLeave;
} 

