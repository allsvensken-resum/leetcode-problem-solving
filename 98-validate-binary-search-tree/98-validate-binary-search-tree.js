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
const isValidBST = function(root) {
   let visited = [];
   inOrderTraverse(root, visited);
   return isSorted(visited); 
};

const inOrderTraverse = (root, visited) => {
   if (!root) return; 
   inOrderTraverse(root.left, visited);
   visited.push(root.val);
   inOrderTraverse(root.right, visited);
}

const isSorted = (visited) => {
   for (let i = 1; i < visited.length; i++) {
        if (visited[i] <= visited[i-1]) return false;
   } 
   return true;
}
