/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let count = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!count.has(nums[i])) {
            count.set(nums[i], 1);
            continue;
        }
        
        count.set(nums[i], count.get(nums[i]) + 1);
    }
    
    for (let [key, val] of count) {
        if (val === 1) return key;
    }
};