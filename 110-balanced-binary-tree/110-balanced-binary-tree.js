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
 * @return {boolean}
 */
class BalanceChecker {
    constructor() {
        this.isBalance = true;
    }
}

const isBalanced = function(root) {
    let checker = new BalanceChecker();
    let height = helper(root, checker);
    return checker.isBalance;
};

const helper = (node, checker) => {
   if (!node) return - 1;
   let leftHeight = helper(node.left, checker);
   let rightHeight = helper(node.right, checker);
   if (Math.abs(leftHeight - rightHeight) > 1) checker.isBalance = false;
   return Math.max(leftHeight, rightHeight) + 1;
}