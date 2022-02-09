/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = new Map();
    for (let val of nums) {
        if (!count.has(val)) {
            count.set(val, 1);
            continue;
        }
        
        count.set(val, count.get(val) + 1);
    }
    
    let halfSize = Math.ceil(nums.length / 2);
    let maxKey = 0;
    let maxVal = 0;
    for (let [key, val] of count) {
        if (val > maxVal) {
            maxKey = key;
            maxVal = val
        }
    }
    
    return maxKey;
};