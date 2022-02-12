/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    const BASE_26 = 26;
    if (columnTitle.length === 1) return getOrderNumber(columnTitle.charAt(0)); 
    let sum = 0; 
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let char = columnTitle.charAt(i);
        let charNumber = getOrderNumber(char);
        sum += Math.pow(BASE_26, columnTitle.length - 1 - i) * charNumber;  
    }    
    
    return sum;
};
    
const getOrderNumber = (char) => {
    const ASCII_TO_ALPHABATIC_ORDER_NUMBER = 64;
    return char.charCodeAt(0) - ASCII_TO_ALPHABATIC_ORDER_NUMBER;
}
    
    
    