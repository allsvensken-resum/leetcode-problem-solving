
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.stack.length === 1) { 
        this.minStack.push(0) 
        return;
    }; 
    
    let currMinIdx = this.minStack[this.minStack.length - 1];
    let currMin = this.stack[currMinIdx];
    
    if (val <= currMin) {
         this.minStack.push(this.stack.length - 1);     
         return;
    } 
      
    this.minStack.push(currMinIdx);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length - 1]; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let topMin = this.minStack[this.minStack.length - 1];
    return this.stack[topMin];
};



/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */