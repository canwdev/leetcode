```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {
        return false
    }
    
    let n = x
    let reversed = 0
    while(n > 0) {
        reversed = reversed * 10 + n%10
        n = parseInt(n/10)
    }
    return reversed === x
};
```