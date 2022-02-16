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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let levels = [];
    let q = [[root, 0]]; 
    while (q.length > 0) {
        let [node, level] = q.pop();
        if (node.left) q.unshift([node.left, level + 1]);
        if (node.right) q.unshift([node.right, level + 1]);
        if (levels[level]) { 
            levels[level].push(node.val); 
            continue;
        }
         
        levels[level] = [node.val]; 
    }
    
    return levels;
};