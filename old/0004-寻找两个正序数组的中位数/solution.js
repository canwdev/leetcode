/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

Array.prototype.unique = function () {
  const arr = this
  const hashMap = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap.has(arr[i])) {
      hashMap.add(arr[i])
    }
  }
  return Array.from(hashMap)
}

// @lc code=start

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => (a - b))
  // console.log('arr', arr)

  if (arr.length === 1) {
    return arr[0]
  }

  const l = arr.length
  if (l % 2 !== 0) {
    return arr[Math.ceil(l / 2) - 1]
  } else {
    const i = l / 2
    return (arr[i - 1] + arr[i]) / 2
  }
};
// @lc code=end

const result = findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])
// const result = findMedianSortedArrays([1, 1], [1, 2])
// const result = findMedianSortedArrays([1, 3], [2])

console.log(result)