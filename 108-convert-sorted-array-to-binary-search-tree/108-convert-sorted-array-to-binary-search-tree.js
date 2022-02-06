/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = function(nums) {
    return addFromMiddleValue(0, nums.length - 1, nums); 
};

const addFromMiddleValue = (left, right, nums) => {
    if  (left > right) return null; 
    let middle = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[middle])
    root.left = addFromMiddleValue(left, middle - 1, nums)
    root.right = addFromMiddleValue(middle + 1, right, nums)
    return root;
}






