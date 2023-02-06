/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function (s) {
  const n = s.length
  if (n === 0 || n === 1) {
    return s
  }

  let range = [0, 0]
  const helper = (ss, n, start, end) => {
    while (start >= 0 && end <= n - 1) {
      if (ss[start] == ss[end]) {
        start--
        end++
      } else {
        break
      }
    }

    if (end - (start + 1) > range[1] - range[0]) {
      range[0] = start + 1
      range[1] = end
    }
  }

  const ss = Array.from(s)
  for (let i = 1; i < n; i++) {
    helper(ss, n, i, i)
    helper(ss, n, i - 1, i)
  }

  // console.log('range', range)
  return s.substring(range[0], range[1])
};
// @lc code=end

// const result = longestPalindrome('babad')
const result = longestPalindrome('cbbd')
console.log('result', result)