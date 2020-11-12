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
  // 创建一个空对象，用于存储哈希表（键值对）
  var hashTable = {}
  // 遍历数组
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    // 获得期望的结果值，比如 9-2=7
    var diff = target - num
    // 如果该值在哈希表中，则返回结果
    if (hashTable[diff] !== undefined) {
      return [hashTable[diff], i]
    } else {
      // 否则，将当前数存入哈希表，键名为数，键值为数组下标
      hashTable[num] = i
    }
    // 由于是一次遍历，数组中的同一个元素不会重复使用
  }
  return []
};
// @lc code=end

var res = twoSum([2, 7, 11, 15], 9)
console.log('twoSum', res)