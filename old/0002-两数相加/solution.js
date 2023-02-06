/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 数组转换为链表
const arrToListNode = (arr) => {
  let pre = new ListNode(arr[0])
  let cur = pre
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return pre
}

// @lc code=start
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
  if (!l1)
    return l2
  if (!l2)
    return l1

  var pre = new ListNode(0) // 创建结果链表
  var cur = pre

  var carry = 0 // 进位
  while (l1 !== null && l2 !== null) {
    var sum = l1.val + l2.val + carry
    var dig = sum % 10 // 使用取余运算，获得个位数
    carry = parseInt(sum / 10) // 获得进位
    // console.log('carry=', carry)

    cur.next = new ListNode(dig)
    cur = cur.next

    l1 = l1.next
    l2 = l2.next
  }

  // 遍历剩下的链表项（如果有）
  function lastList(l) {
    while (l) {
      var sum = l.val + carry
      var dig = sum % 10
      carry = parseInt(sum / 10)
      // console.log('l carry=', carry)

      cur.next = new ListNode(dig)
      cur = cur.next

      l = l.next
    }
  }
  if (l1 !== null) {
    lastList(l1)
  }
  if (l2 !== null) {
    lastList(l2)
  }

  // 最后的进位项
  if (carry !== 0) {
    // console.log('f carry=', carry)

    cur.next = new ListNode(carry)
    cur = cur.next
  }

  return pre.next
};
// @lc code=end
//                   8 9 9 9 0 0 0 1
var l1 = arrToListNode([9, 9, 9, 9, 9, 9, 9])
var l2 = arrToListNode([9, 9, 9, 9])

console.log(addTwoNumbers(l1, l2))

/*
[2, 4, 3]
[5, 6, 4]

=> [7,0,8]
*/

/*
[9,9,9,9,9,9,9]
[9,9,9,9]

=> [8,9,9,9,0,0,0,1]
*/
