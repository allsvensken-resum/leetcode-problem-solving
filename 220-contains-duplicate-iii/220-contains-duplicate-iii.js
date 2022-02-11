/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++)    
    {
        for (let j = i + 1; j < nums.length; j++) {
            let diff = Math.abs(nums[i] - nums[j]);
            let idxDiff = Math.abs(i - j);
            if (diff <= t && idxDiff <= k) return true; 
        }
    }
    
    return false;
};

