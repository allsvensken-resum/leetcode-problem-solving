/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    let stack = [];
    intervals = intervals.sort((a, b) => a[0] - b[0])
    stack.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = getTopStack(stack);     
        let curr = intervals[i]; 
        let [merged, isOverlap] = mergeTwoIntervals(prev, curr);
        if (isOverlap) stack.pop();
        stack.push(merged);
    }
    
    return stack;
};

const mergeTwoIntervals = (first, second) => {
   let endOfFirst = first[1];
   let startOfSecond = second[0];
   let startOfFirst = first[0];
   let endOfSecond = second[1];
   if (isOverlap(endOfFirst, startOfSecond)) return [[startOfFirst, endOfFirst > endOfSecond ? endOfFirst : endOfSecond], true];
   return [second, false];  
}

const isOverlap = (end, start) => {
   return end - start >= 0; 
}

const getTopStack = (stack) => {
    return stack[stack.length - 1];
}