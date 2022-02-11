/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    let visited = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!visited.has(nums[i])) {
            visited.set(nums[i], i);
            continue;
        }
        
        let j = visited.get(nums[i]);
        if (Math.abs(i - j) <= k) return true;
        visited.set(nums[i], i);
    }    
    
    return false;
};