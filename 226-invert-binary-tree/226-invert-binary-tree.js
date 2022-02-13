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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    helper(root);
    return root;
};

const helper = (node) => {
   if (!node) return;
   let tempLeft = node.left; 
   node.left = node.right;
   node.right = tempLeft;
   helper(node.left);
   helper(node.right);
}