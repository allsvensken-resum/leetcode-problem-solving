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
const minDepth = function(root) {
    if (!root) return 0;
    let q = [[root, 1]];
    while (q.length > 0) {
        let [currNode, currDepth] = q.shift();
        if (!currNode.left && !currNode.right) return currDepth;
        if (currNode.left) q.push([currNode.left, currDepth + 1]);
        if (currNode.right) q.push([currNode.right, currDepth + 1]);
    }
};

