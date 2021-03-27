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

// 数组转换为链表
const toListNode = (arr) => {
    let root, cur

    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i])
        if (!root) {
            root = newNode
        } else {
            if (!cur) {
                root.next = newNode
                cur = root.next
            } else {
                cur.next = newNode
                cur = cur.next
            }
        }
    }

    return root
}

const toNumber = (node) => {
    let result = '';

    let n = node
    while (n.next) {
        result = n.val + '' + result
        n = n.next
    }
    result = n.val + '' + result
    return BigInt(result) // 避免大数使用科学记数法
}

const toList = (num) => {
    const arr = String(num).split('').map(i => Number(i)).reverse()

    return toListNode(arr)
}

var addTwoNumbers = function (l1, l2) {
    const n1 = toNumber(l1)
    const n2 = toNumber(l2)
    const result = BigInt(n1 + n2)
    return toList(result)
};
// @lc code=end

var l1 = toListNode([2, 4, 3])
// var l1 = toListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
var l2 = toListNode([5, 6, 4])

console.log(addTwoNumbers(l1, l2))
