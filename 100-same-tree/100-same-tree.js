/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return dpsBothTree(p, q);
};

const dpsBothTree = (p, q) => {
    if (!p && !q) return true;
    if ((!p && q) || (!q && p)) return false;
    if (p.val !== q.val) return false;
    let allLeft = dpsBothTree(p.left, q.left);
    let allRight = dpsBothTree(p.right, q.right);
    return allLeft && allRight;
}