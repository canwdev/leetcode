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

  let mid
  if (arr.length % 2 !== 0) {
    const index = Math.ceil(arr.length / 2)
    mid = arr[index - 1]
  } else {
    const index = (arr.length) / 2
    // console.log(index)
    const m1 = arr[index - 1], m2 = arr[index]
    // console.log(m1, m2)
    mid = (m1 + m2) / 2
  }
  return mid
};
// @lc code=end

const result = findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])
// const result = findMedianSortedArrays([1, 1], [1, 2])
// const result = findMedianSortedArrays([1, 3], [2])

console.log(result)