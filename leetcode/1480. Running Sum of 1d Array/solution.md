2023-02-06 11:39:51

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result = []
    var prev = 0
    for (var i=0; i<nums.length; i++) {
        prev = prev + nums[i]
        result.push(prev)
    }
    return result
};
```