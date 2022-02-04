/**
 * @param {number} n
 * @return {number}
 */

/**

1   => 1

2   => 1 + 1
    => 2

3   => 1 + 1 + 1
    => 1 + 2
    => 2 + 1

4   => 1 + 1 + 1 + 1
    => 1 + 2 + 1
    => 2 + 1 + 1
    => 1 + 1 + 2
    => 2 + 2

5   => 1 + 1 + 1 + 1 + 1
    => 1 + 1 + 1 + 2
    => 1 + 1 + 2 + 1
    => 1 + 2 + 1 + 1
    => 2 + 1 + 1 + 1
    => 2 + 2 + 1
    => 1 + 2 + 2
    => 2 + 1 + 2
    
    f(n) = f(n - 1) + f(n - 2)
    
    : f (1) = 1
    : f (2) = 2
*/

/**
const climbStair = function(n) {
    if (n === 1 || n === 2) return n;
    return climbStairs(n - 1) + climbStairs(n - 2);
}

                                   f(7)
                    f(6)                         f(5) 
            f(5)           f(4)          f(4)             f(3)
       f(4)      f(3)  f(3)    f(2)  f(3)   f(2)      f(2)   f(1)
      
      Have a lot of repetitive calculation.
*/


/**
    Climb stairs with memoize;
*/
const climbStairs = function(n) {
    let memoize = new Map();
    return climbStairsWithMemoize(n, memoize);
};

const climbStairsWithMemoize = (n, memoize) => {
   if (memoize.has(n)) return memoize.get(n);
   else if (n === 1 || n === 2) return n;
   let result = climbStairsWithMemoize(n - 1, memoize) + climbStairsWithMemoize(n - 2, memoize);
   memoize.set(n, result);
   return result;
}




