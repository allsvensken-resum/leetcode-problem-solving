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

const preorderTraversal = function(root) {
     let visited = [];
     helper(root, visited);
     return visited;
};

const helper = (node, visited) => {
   if (!node) return; 
   visited.push(node.val);
   helper(node.left, visited)
   helper(node.right, visited)
}