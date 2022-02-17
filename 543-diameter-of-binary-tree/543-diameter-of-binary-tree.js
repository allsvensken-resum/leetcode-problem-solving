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
    let diameter = {max : -Infinity};
    longestPath(root, diameter);
    return diameter.max;
};

const longestPath = (node, diameter) => {
    if (!node) return 0 ;
    let leftHeight = longestPath(node.left, diameter);
    let rightHeight = longestPath(node.right, diameter);
    diameter.max = Math.max(diameter.max, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
}

