/**
 * 规则：
 *    0 == 'off' 表示不检查
 *    1 == 'warn' 表示会警告
 *    2 == 'error' 表示会报错
 */
const rules = {
  "arrow-body-style": 0, // 'off' 要求箭头函数体使用大括号
  "array-callback-return": "off", // 强制数组方法的回调函数中有 return 语句

  "no-var": 2, // 要求使用 let 或 const 而不是 var

  "no-console": "off", // 禁止使用 console
  "consistent-return": 0, // 要求 return 语句要么总是指定返回的值，要么不指定

  "no-plusplus": 0, // 禁用一元操作符 ++ 和 --
};
