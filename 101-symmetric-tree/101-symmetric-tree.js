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
var isSymmetric = function(root) {
  return dfsBothTree(root, root);  
};

const dfsBothTree = (p, q) => {
   if (!p && !q) return true;
   if ((!p && q) || (!q && p)) return false;
   if ((p.val !== q.val)) return false;
   let allLeftSym = dfsBothTree(p.left, q.right);
   let allRightSym = dfsBothTree(p.right, q.left);
   return allLeftSym && allRightSym;
}
