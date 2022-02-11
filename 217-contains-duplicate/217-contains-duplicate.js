/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
   let sets = new Set(nums);
   return sets.size < nums.length;
};