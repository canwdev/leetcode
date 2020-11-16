/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// @lc code=start
function ListNodeToArray(listNode) {
  var arr = []

  while (listNode.next) {
    arr.push(listNode.val)
    listNode = listNode.next
  }
  arr.push(listNode.val)
  return arr.reverse()
}
function toListNode(arr) {
  var listNode, temp
  for (var i = 0; i < arr.length; i++) {
    var newNode = new ListNode(arr[i])
    if (!listNode) {
      listNode = newNode
    } else {
      if (!temp) {
        listNode.next = newNode
        temp = listNode.next
      } else {
        temp.next = newNode
        temp = temp.next
      }
    }
  }
  return listNode
}
function ArrayPlus(a1, a2) {
  var aShort, aLong
  if (a1.length > a2.length) {
    aShort = a2
  } else {
    aLong = a1
  }

  var result = []
  for (var i = 0; i < aLong.length; i++) {
    var x = aShort[i]
    var y = aLong[i]
    var z = x ? x + y : y
    result.push(z)
  }
  return result
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var a1 = ListNodeToArray(l1)
  var a2 = ListNodeToArray(l2)

  var arr = ArrayPlus(a1, a2).reverse()
  console.log(arr)
  return toListNode(arr)
};
// @lc code=end

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))
