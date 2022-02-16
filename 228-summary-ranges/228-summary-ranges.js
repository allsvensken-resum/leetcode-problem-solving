/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    if (nums.length === 0) return []; 
    let ranges = [];
    let init = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1]; 
        let curr = nums[i];        
        if (curr - prev !== 1) {
           ranges.push(createRange(init, prev));
           init = curr;
        } 
    }
    
    let prev = nums[nums.length - 1];
    ranges.push(createRange(init, prev));
    return ranges;
};

const createRange = (a, b) => {
   if (a === b) return a.toString(); 
   return `${a}->${b}`;
}