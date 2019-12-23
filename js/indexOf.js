/**
 * 我们通常使用 indexOf 和 -1 来判断，某个字符串或者数组是否包含某个元素。
 * 这样写法不好，暴露了底层实现细节，这些细节应该被屏蔽掉。
 * 因此，可以使用 ~ (字位反转)
 * ~x 可以简单理解为 
 */
let a = 'guozheng';
let b = ['guo', 'zheng', 'welcome'];
let c = 'guo'
if(~a.indexOf(c)) {
  console.log(`存在 ${c}`)
} else {
  console.log(`不存在 ${c}`)
}

/**
 * parseInt 和 Number
 * 当字符串为数值字符串时,两者没啥区别.
 * 当字符串中含有不可以转为数值的字符时: Number 会返回null, parseInt 返回前面能转化的部分
 */

 let ns1 = '23px';
 let ns2 = '23';
 let ns3 = 23;
 console.log( Number(ns1))
 console.log( Number(ns2))
 console.log( Number(ns3))
 console.log(parseInt(ns1))
 console.log(parseInt(ns2))
 console.log(parseInt(ns3))