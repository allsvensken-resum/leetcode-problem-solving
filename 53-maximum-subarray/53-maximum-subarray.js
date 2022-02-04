/**
 * @param {number[]} nums
 * @return {number}
 */

// The idea is when we should keep sum of negative value ?

const maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0]; 
    
    for (let i = 1; i < nums.length; i++) {
        let currVal = nums[i];
        if (currVal > sum && currVal + sum < currVal) {
            sum = currVal;
        } else {
            sum += currVal;
        }
        
        max = Math.max(sum, max);
    }
    
    return max;
};



