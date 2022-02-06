/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    let result = []
    let start = 0;
    let end;
    
    for (let i = 0; i < numRows; i++) {
        let previousResult = result[i - 1];
        let eachResult = []; 
        end = i;
        eachResult[start] = 1;
        eachResult[end] = 1;
        let tempStart = 1;
        let eachStart = 0
        
        while (tempStart < end && i > 1) {
           eachResult[tempStart] = previousResult[eachStart] + previousResult[tempStart]; 
           tempStart += 1;
           eachStart += 1;
        } 
        
        result.push(eachResult);
    } 
    
    return result;
};


               