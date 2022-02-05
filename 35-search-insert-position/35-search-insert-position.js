/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let midIdx;
    
    while (left <= right) {
        midIdx = calMiddleIdx(left, right);
        let midVal = nums[midIdx]; 
        if (midVal === target) return midIdx    
        if (midVal < target) {
            left = midIdx + 1;
            continue;
        } 
        
        right = midIdx - 1;
    }
    
    
    return target < nums[midIdx] ? midIdx : midIdx + 1 
};
    
    
const calMiddleIdx = (left, right) => {
   return Math.ceil((left + right) / 2)
}