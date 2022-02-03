/**
 * @param {number[]} height
 * @return {number}
 */

//finding array that have max (higher boudaries value * number of element in array - 1)
//find to maximum number in array that close to the start and the end of array

const maxArea = function(height) {
   let max = 0;
   let rightBound = height.length - 1;
   let leftBound = 0; 
    
   while (leftBound < rightBound) {
       let leftHeight = height[leftBound];
       let rightHeight= height[rightBound];
       let size = Math.min(leftHeight, rightHeight) * (rightBound - leftBound);
       max = Math.max(max, size);
       
       if (leftHeight < rightHeight) {
           leftBound += 1;
           continue;
       }
       
       rightBound -= 1;
   }
   
    return max;
};
