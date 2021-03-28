/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0
  }

  const hashSet = new Set()
  let max = 1

  let start = 0, end = 0

  while (end < s.length) {
    const cEnd = s.charAt(end)

    if (hashSet.has(cEnd)) {
      hashSet.delete(s.charAt(start))
      start++
    } else {
      hashSet.add(cEnd)
      max = Math.max(max, hashSet.size)
      end++
    }
  }
  console.log('hashSet', hashSet)
  return max
};
// @lc code=end

const result = lengthOfLongestSubstring('abcabcbb')

console.log('result', result)