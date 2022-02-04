/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
   let tempResult = [];
   let curr1 = 0;
   let curr2 = 0;
   
   while (curr1 < m && curr2 < n) {
        let val1 = nums1[curr1];
        let val2 = nums2[curr2];
        if (val1 < val2) {
            tempResult.push(val1);
            curr1 += 1;
            continue;
        } 
       
        tempResult.push(val2);
        curr2 += 1;
   }
    
   while (curr1 < m) {
      tempResult.push(nums1[curr1]); 
      curr1 += 1; 
   }
    
   while (curr2 < n) {
      tempResult.push(nums2[curr2]); 
      curr2 += 1;
   }
    
   for (let i = 0; i < nums1.length; i++) {
       nums1[i] = tempResult[i];
   }
    
};


