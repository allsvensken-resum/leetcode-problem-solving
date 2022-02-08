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
 * @return {number[]}
 */
const postorderTraversal = function(root) {
   let visited = [];
   helper(root, visited);
   return visited;
};

const helper = (node, visited) => {
   if (!node) return;
   helper(node.left, visited);
   helper(node.right, visited);
   visited.push(node.val);
}