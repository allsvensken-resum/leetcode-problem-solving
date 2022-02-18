/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = new Array(nums.length);
    let countFromFront = 0;
    let countFromLast = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { 
            result[countFromFront] = nums[i]; 
            countFromFront += 1;
            continue;
        }
        
        result[countFromLast] = nums[i]; 
        countFromLast -= 1;
    }
    
    return result;
};