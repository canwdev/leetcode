/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.58%)
 * Likes:    9587
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 通过暴力遍历找到两数之和
  for (var i = 0; i < nums.length; i++) {
    // console.log('i =',i)
    for (var j = i+1; j < nums.length; j++) {
      // console.log('j =',j)
      // 同一个元素不能使用两遍
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};
// @lc code=end

var res = twoSum([2, 7, 11, 15], 9)
console.log('twoSum', res)