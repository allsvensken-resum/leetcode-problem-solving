/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    
    let commonPrefix = findPrefixFromTwoString(strs[0], strs[1]);
    
    for (let i = 2; i < strs.length; i++) {
        let prefixLength = commonPrefix.length;
        let currentPrefix = strs[i].substring(0, prefixLength);
        if (currentPrefix === commonPrefix) continue;
        commonPrefix = findPrefixFromTwoString(commonPrefix, currentPrefix);
        if (commonPrefix.length === 0) return "";
    }
    
    return commonPrefix;
};


const findPrefixFromTwoString = (first, second) => {
    let commonPrefix = "";
    let longestLength = first.length > second.length ? first.length : second.length;
    
    for (let i = 0; i < longestLength; i++) {
        let firstChar = first.charAt(i);
        let secondChar = second.charAt(i);
        if (firstChar !== secondChar) break;
        commonPrefix += firstChar;
    } 
    
    return commonPrefix;
}