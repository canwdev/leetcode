```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var seen = {}
    for (var i=0; i<nums.length; i++) {
        var firstNum = nums[i]
        var secondNum = target - firstNum
        if (secondNum in seen) {
            return [seen[secondNum], i]
        }
        seen[firstNum] = i
    }
};
```