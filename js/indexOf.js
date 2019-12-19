/**
 * 我们通常使用 indexOf 和 -1 来判断，某个字符串或者数组是否包含某个元素。
 * 这样写法不好，暴露了底层实现细节，这些细节应该被屏蔽掉。
 * 因此，可以使用 ~ (字位反转)
 * ~x 可以简单理解为 
 */
let a = 'guozheng';
let b = ['guo', 'zheng', 'welcome'];

if(~a.indexOf("g")) {
  console.log("执行 if 语句")
} else {
  console.log("执行 else 语句")
}
