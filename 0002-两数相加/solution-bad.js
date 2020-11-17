/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

 // 这个版本在构思的时候就错了，留着权当备份。

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// @lc code=start
function listNodeToArray(listNode) {
  var arr = []

  while (listNode.next) {
      arr.push(listNode.val)
      listNode = listNode.next
  }
  arr.push(listNode.val)
  return arr
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
      aLong = a1
  } else {
      aShort = a1
      aLong = a2
  }

  var result = [...aLong]
  var carry = 0
  for (var i = aShort.length - 1; i >= 0; i--) {
      var x = aShort[i]
      var y = aLong[i]
      var sum = carry + x + y

      if (sum >= 10) {
          carry = 1
          sum -= 10
      } else {
          carry = 0
      }

      result[i] = sum
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
var addTwoNumbers = function(l1, l2) {
  var a1 = listNodeToArray(l1)
  var a2 = listNodeToArray(l2)
  console.log(a1, a2)
  return toListNode(ArrayPlus(a1, a2).reverse())
};
// @lc code=end

var l1 = toListNode([2, 4, 3])
var l2 = toListNode([5, 6, 4])

console.log(addTwoNumbers(l1, l2))
