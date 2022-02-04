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
const inorderTraversal = function(root) {
  let result = []; 
  inOrderTraversalHp(root, result);
  return result; 
};

const inOrderTraversalHp = (root, result) => {
  if (!root) return;
  inOrderTraversalHp(root.left, result);
  result.push(root.val);
  inOrderTraversalHp(root.right, result);
}
