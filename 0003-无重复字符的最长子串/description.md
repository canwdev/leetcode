# [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/)

|  Category  |   Difficulty    | Likes | Dislikes |
| :--------: | :-------------: | :---: | :------: |
| algorithms | Medium (35.83%) | 4577  |    -     |

<details open="" style="color: rgb(204, 204, 204); font-family: system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Tags</strong></summary><p><a href="https://leetcode.com/tag/hash-table" title="https://leetcode.com/tag/hash-table" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">hash-table</code></a><span>&nbsp;</span>|<span>&nbsp;</span><a href="https://leetcode.com/tag/two-pointers" title="https://leetcode.com/tag/two-pointers" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">two-pointers</code></a><span>&nbsp;</span>|<span>&nbsp;</span><a href="https://leetcode.com/tag/string" title="https://leetcode.com/tag/string" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">string</code></a><span>&nbsp;</span>|<span>&nbsp;</span><a href="https://leetcode.com/tag/sliding-window" title="https://leetcode.com/tag/sliding-window" style="color: var(--vscode-textLink-foreground); text-decoration: none;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">sliding-window</code></a></p></details>

<details open="" style="color: rgb(204, 204, 204); font-family: system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Companies</strong></summary><p><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">adobe</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">amazon</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">bloomberg</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">yelp</code></p></details>

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

------

[Discussion](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/comments/) | [Solution](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/)