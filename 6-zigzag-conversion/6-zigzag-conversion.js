/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let numberOfRow = Math.min(s.length, numRows);
    let lastRow = numberOfRow - 1;
    let downDirection = true;
    
    let zigzagRow = 0; 
    let zigzag = initArrayOfEmptyString(numberOfRow); 
    
    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charAt(i);
        zigzag[zigzagRow] = zigzag[zigzagRow] + currentChar; 
        zigzagRow += downDirection ? 1 : -1;
        if (reachingBoundaries(zigzagRow, lastRow)) downDirection = flipDirection(downDirection);
    }
    
    return zigzag.join("");
    
};

const flipDirection = (curDirection) => {
   return !curDirection; 
}

const reachingBoundaries = (currentRow, lastRow) => {
    return currentRow === 0 || currentRow === lastRow ;
}

const initArrayOfEmptyString = (numberOfRow) => {
    let zigzag = [];
    for (i = 0; i < numberOfRow; i++) {
        zigzag.push("");
    } 
    
    return zigzag;
}

/*
    - going zigzag way by flip direction when we reaching boundaries;
*/
 

