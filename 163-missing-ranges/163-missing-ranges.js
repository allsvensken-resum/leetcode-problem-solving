/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function(nums, lower, upper) {
    if (nums.length === 0) {
        return [createRange(lower, upper)]; 
    }
    
    let ranges = [];
    
    let lowerDiff = nums[0]  - lower;
    if (lowerDiff !== 0) {
       ranges.push(createRange(lower, nums[0] - 1)); 
    } 
    
    for (let i = 0; i < nums.length - 1; i++) {
       let diff = nums[i + 1] - nums[i];
       if (diff === 1) continue;
       ranges.push(createRange(nums[i] + 1, nums[i + 1] - 1));
    }
    
    let upperDiff = upper - nums[nums.length - 1]    
    if (upperDiff === 0) return ranges;
    ranges.push(createRange(nums[nums.length - 1] + 1, upper)) 
    return ranges;
};

const createRange = (start, end) => {
    if (start !== end) {
        return `${start}->${end}` 
    } 
    
    return `${start}`; 
}

 