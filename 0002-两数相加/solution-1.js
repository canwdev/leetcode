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
/* const arrToListNodeOld = (arr) => {
    let root, cur

    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i])
        if (!root) {
            root = newNode
        } else {
            if (!cur) {
                cur = newNode
                root.next = cur
            } else {
                cur.next = newNode
                cur = cur.next
            }
        }
    }

    return root
} */

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
const arrToListNode = (arr) => {
    let pre = new ListNode(arr[0])
    let cur = pre
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return pre
}

const listNodeToNumber = (node) => {
    let result = '';

    let n = node
    while (n.next) {
        result = n.val + '' + result
        n = n.next
    }
    result = n.val + '' + result
    return BigInt(result) // 避免大数使用科学记数法
}

const numberToListNode = (num) => {
    const arr = String(num).split('').map(i => Number(i)).reverse()

    return arrToListNode(arr)
}

var addTwoNumbers = function (l1, l2) {
    const n1 = listNodeToNumber(l1)
    const n2 = listNodeToNumber(l2)
    const result = BigInt(n1 + n2)
    return numberToListNode(result)
};
// @lc code=end

var l1 = arrToListNode([2, 4, 3])
// var l1 = arrToListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
var l2 = arrToListNode([5, 6, 4])

console.log(addTwoNumbers(l1, l2))
