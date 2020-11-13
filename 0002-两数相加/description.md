# [两数相加](https://leetcode-cn.com/problems/add-two-numbers/description/)

|  Category  |   Difficulty    | Likes | Dislikes |
| :--------: | :-------------: | :---: | :------: |
| algorithms | Medium (38.88%) | 5239  |    -     |

<details open="" style="color: rgb(204, 204, 204); font-family: system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Tags</strong></summary><p><a href="https://leetcode.com/tag/linked-list" title="https://leetcode.com/tag/linked-list" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">linked-list</code></a><span>&nbsp;</span>|<span>&nbsp;</span><a href="https://leetcode.com/tag/math" title="https://leetcode.com/tag/math" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">math</code></a></p></details>

<details open="" style="color: rgb(204, 204, 204); font-family: system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Companies</strong></summary><p><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">adobe</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">airbnb</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">amazon</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">bloomberg</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">microsoft</code></p></details>

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

------

[Discussion](https://leetcode-cn.com/problems/add-two-numbers/comments/) | [Solution](https://leetcode-cn.com/problems/add-two-numbers/solution/)