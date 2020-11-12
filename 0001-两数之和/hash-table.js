/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hashTable = {}
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    var diff = target - num
    if (hashTable[diff] !== undefined) {
      return [hashTable[diff], i]
    } else {
      hashTable[num] = i
    }
  }
  return []
};
// @lc code=end

var res = twoSum([2, 7, 11, 15], 9)
console.log('twoSum', res)