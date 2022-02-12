/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let result = []; 
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
           let subLeft = mid - 1;
           let subRight = mid + 1;
           result.push(mid);
            
           while (subLeft >= 0 && nums[subLeft] === target) {
               if (result.length === 2) result.shift(); 
               result.unshift(subLeft);
               subLeft -= 1
           }
            
           while (subRight < nums.length && nums[subRight] === target) {
              if (result.length === 2) result.pop();
              result.push(subRight);
              subRight += 1
           }
           
           if (result.length === 1) result.push(mid);
           return result;
        }
        
        if (nums[mid] < target) {
            left = mid + 1;
            continue;
        } 
        
        right = mid - 1;
    }
    
    return [-1, -1];
};